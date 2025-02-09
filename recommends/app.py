from flask import Flask, request, jsonify
import anthropic
import json
import redis
import re
import os
from enum import Enum
from typing import List, Tuple, Dict, Any
from dotenv import load_dotenv

# .env 파일 로드
load_dotenv()

app = Flask(__name__)

# 환경 변수에서 설정 로드
ANTHROPIC_API_KEY = os.getenv('ANTHROPIC_API_KEY')
REDIS_HOST = os.getenv('REDIS_HOST')
REDIS_PORT = os.getenv('REDIS_PORT')
REDIS_PASSWORD = os.getenv('REDIS_PASSWORD')

# 필수 환경 변수 확인
required_env_vars = {
    'ANTHROPIC_API_KEY': ANTHROPIC_API_KEY,
    'REDIS_HOST': REDIS_HOST,
    'REDIS_PORT': REDIS_PORT,
    'REDIS_PASSWORD': REDIS_PASSWORD
}

missing_vars = [var for var, value in required_env_vars.items() if not value]
if missing_vars:
    raise ValueError(f"Missing required environment variables: {', '.join(missing_vars)}")

# Anthropic API 클라이언트 초기화
client = anthropic.Anthropic(api_key=ANTHROPIC_API_KEY)

# Redis 연결 설정
redis_client = redis.Redis(
    host=REDIS_HOST,
    port=int(REDIS_PORT),
    password=REDIS_PASSWORD,
    decode_responses=True
)

class ProductType(str, Enum):
    DRESS = "DRESS"
    MAKEUP = "MAKEUP"
    STUDIO = "STUDIO"

class ProductImageResponseDto:
    def __init__(self, imageUrl: str):
        self.imageUrl = imageUrl

    @staticmethod
    def from_dict(data: dict) -> 'ProductImageResponseDto':
        return ProductImageResponseDto(imageUrl=data.get('imageUrl', ''))

# 검색 가능 필드 및 가중치 정의
SEARCHABLE_FIELDS = {
    "address": 5,
    "price": 5,
    "type": 5,
    "name": 2
}

def create_less_than(value: str) -> Tuple[str, int]:
    return 'less_than', int(value) * 10000

def create_greater_than(value: str) -> Tuple[str, int]:
    return 'greater_than', int(value) * 10000

def create_range(start: str, end: str) -> Tuple[str, Tuple[int, int]]:
    return 'range', (int(start) * 10000, int(end) * 10000)

# 가격 관련 패턴 및 키워드
PRICE_PATTERNS = {
    # 특정 가격 이하
    r'(\d+)만원\s*(?:이하|미만|까지)': create_less_than,
    
    # 특정 가격 이상
    r'(\d+)만원\s*(?:이상|초과|넘는)': create_greater_than,
    
    # 가격 범위
    r'(\d+)만원에서\s*(\d+)만원': create_range,
}

PRICE_KEYWORDS = {
    '저렴한': ('less_than', 500000),
    '싼': ('less_than', 500000),
    '값싼': ('less_than', 500000),
    '낮은': ('less_than', 500000),
    '비싼': ('greater_than', 500000),
    '고가': ('greater_than', 1000000),
    '고급': ('greater_than', 1000000),
    '럭셔리': ('greater_than', 1000000),
    '프리미엄': ('greater_than', 800000),
}

def get_all_products_from_redis() -> List[Dict[str, Any]]:
    """Redis에서 모든 상품 데이터 가져오기"""
    products = []
    try:
        for key in redis_client.keys('product:*'):
            product_data = redis_client.hgetall(key)
            if product_data:
                # images 문자열을 리스트로 변환
                images_data = json.loads(product_data.get('images', '[]'))
                images = [ProductImageResponseDto.from_dict(img) for img in images_data]
                
                product = {
                    'id': int(product_data.get('id', 0)),
                    'name': product_data.get('name', ''),
                    'type': product_data.get('type', ''),
                    'price': int(product_data.get('price', 0)),
                    'address': product_data.get('address', ''),
                    'images': [{'imageUrl': img.imageUrl} for img in images]
                }
                products.append(product)
    except Exception as e:
        print(f"Error fetching products from Redis: {e}")
        raise
    return products

def get_claude_interpretation(user_input: str) -> Dict[str, Any]:
    """Claude를 사용하여 사용자 입력을 해석하고 구조화"""
    try:
        message = client.messages.create(
            model="claude-3-5-sonnet-20241022",
            max_tokens=100,
            messages=[
                {
                    "role": "user",
                    "content": user_input
                }
            ],
            tools=[
                {
                    "type": "function",
                    "function": {
                        "name": "recommend_studio",
                        "description": "사용자 요청에 맞는 스튜디오 추천",
                        "parameters": {
                            "type": "object",
                            "properties": {
                                "location": {
                                    "type": "string",
                                    "description": "원하는 지역 (예: 서울, 부산 등)"
                                },
                                "min_price": {
                                    "type": "integer",
                                    "description": "최소 가격 (단위: 원)"
                                },
                                "max_price": {
                                    "type": "integer",
                                    "description": "최대 가격 (단위: 원)"
                                },
                                "style": {
                                    "type": "string",
                                    "description": "스튜디오 스타일 (예: 모던, 빈티지, 럭셔리 등)"
                                }
                            }
                        }
                    }
                }
            ]
        )
        
        # Function call 정보 추출
        for content in message.content:
            if content.type == 'tool_calls':
                tool_call = content.tool_calls[0]
                return json.loads(tool_call.function.arguments)
        
        return None
    except Exception as e:
        print(f"Error in Claude interpretation: {e}")
        return None

def extract_price_conditions(user_input: str) -> List[Tuple[str, Any]]:
    """사용자 입력에서 가격 조건 추출"""
    conditions = []
    
    # 정규표현식 패턴 매칭
    for pattern, func in PRICE_PATTERNS.items():
        matches = re.finditer(pattern, user_input)
        for match in matches:
            groups = match.groups()
            try:
                if len(groups) == 1:
                    result = func(groups[0])
                elif len(groups) == 2:
                    result = func(groups[0], groups[1])
                conditions.append(result)
            except Exception as e:
                print(f"Error processing pattern {pattern}: {e}")
                continue
                
    # 키워드 매칭
    for keyword, condition in PRICE_KEYWORDS.items():
        if keyword in user_input:
            conditions.append(condition)
    
    return conditions

def preprocess_input(user_input: str) -> List[str]:
    """사용자 입력을 전처리하여 핵심 키워드만 추출"""
    stop_words = ['의', '한', '를', '을', '에게', '에서', '으로', '와', '과', '을', '를', '도', '는', '가', '에', '있']
    
    # 가격 관련 표현 제거
    cleaned_input = user_input
    for pattern in PRICE_PATTERNS.keys():
        cleaned_input = re.sub(pattern, '', cleaned_input)
    for keyword in PRICE_KEYWORDS.keys():
        cleaned_input = cleaned_input.replace(keyword, '')
    
    words = cleaned_input.split()
    processed_terms = []
    
    for word in words:
        processed_word = word
        for stop in stop_words:
            if processed_word.endswith(stop):
                processed_word = processed_word[:-len(stop)]
        if processed_word.strip():
            processed_terms.append(processed_word)
            
    return processed_terms

def enhance_search_terms(interpretation: Dict[str, Any], original_terms: List[str]) -> List[str]:
    """Claude의 해석을 바탕으로 검색어 강화"""
    enhanced_terms = original_terms.copy()
    
    if interpretation:
        if interpretation.get('location'):
            enhanced_terms.append(interpretation['location'])
        if interpretation.get('style'):
            enhanced_terms.append(interpretation['style'])
    
    return list(set(enhanced_terms))  # 중복 제거

def enhance_price_conditions(interpretation: Dict[str, Any], original_conditions: List[Tuple[str, Any]]) -> List[Tuple[str, Any]]:
    """Claude의 해석을 바탕으로 가격 조건 강화"""
    enhanced_conditions = original_conditions.copy()
    
    if interpretation:
        if interpretation.get('min_price'):
            enhanced_conditions.append(('greater_than', interpretation['min_price']))
        if interpretation.get('max_price'):
            enhanced_conditions.append(('less_than', interpretation['max_price']))
    
    return enhanced_conditions

def apply_price_conditions(studios: List[Dict[str, Any]], conditions: List[Tuple[str, Any]]) -> List[Dict[str, Any]]:
    """가격 조건을 적용하여 스튜디오 필터링"""
    if not conditions:
        return studios
    
    filtered_studios = []
    for studio in studios:
        price = studio['price']
        matches_all_conditions = True
        
        for condition_type, value in conditions:
            if condition_type == 'less_than' and price >= value:
                matches_all_conditions = False
            elif condition_type == 'greater_than' and price <= value:
                matches_all_conditions = False
            elif condition_type == 'range' and not (value[0] <= price <= value[1]):
                matches_all_conditions = False
        
        if matches_all_conditions:
            filtered_studios.append(studio)
    
    return filtered_studios

def calculate_relevance(product: Dict[str, Any], terms: List[str]) -> float:
    """검색어와 상품의 관련성 점수 계산"""
    score = 0
    for field, weight in SEARCHABLE_FIELDS.items():
        field_value = str(product.get(field, '')).lower()
        for term in terms:
            if term in field_value or field_value in term:
                score += weight
    return score

@app.route('/api/recommends', methods=['GET'])
def get_recommendations():
    """스튜디오 추천 API 엔드포인트"""
    try:
        # Redis 연결 확인
        redis_client.ping()
        
        # 요청에서 message 파라미터 추출
        message = request.args.get('message')
        if not message:
            return jsonify({
                "message": "메시지가 필요합니다",
                "status": 400,
                "data": []
            }), 400

        # Claude를 통한 사용자 입력 해석
        interpretation = get_claude_interpretation(message)
        
        # 기본 검색 조건 추출
        price_conditions = extract_price_conditions(message)
        search_terms = preprocess_input(message.lower())
        
        # Claude 해석을 통한 검색 조건 강화
        if interpretation:
            search_terms = enhance_search_terms(interpretation, search_terms)
            price_conditions = enhance_price_conditions(interpretation, price_conditions)

        # Redis에서 모든 상품 데이터 가져오기
        all_products = get_all_products_from_redis()
        
        # STUDIO 타입 상품만 필터링
        studio_products = [p for p in all_products if p['type'] == ProductType.STUDIO]
        
        # 가격 조건 적용
        studio_products = apply_price_conditions(studio_products, price_conditions)
        
        # 관련성 점수 계산 및 정렬
        scored_studios = [
            (studio, calculate_relevance(studio, search_terms))
            for studio in studio_products
        ]

        scored_studios.sort(key=lambda x: x[1], reverse=True)
        recommended_studios = [studio for studio, score in scored_studios if score > 0]
        
        # API 명세에 맞게 데이터 포맷 변환
        formatted_studios = []
        for studio in recommended_studios:
            formatted_studio = {
                "id": studio["id"],
                "type": studio["type"],
                "name": studio["name"],
                "price": f"{studio['price']:,}",
                "address": studio["address"],
                "images": studio.get("images", [])
            }
            formatted_studios.append(formatted_studio)

        response = {
            "message": "",
            "status": 200,
            "data": formatted_studios
        }

        return jsonify(response), 200

    except redis.ConnectionError:
        return jsonify({
            "message": "데이터베이스 연결 오류",
            "status": 500,
            "data": []
        }), 500
    except Exception as e:
        print(f"Error in get_recommendations: {str(e)}")
        return jsonify({
            "message": str(e),
            "status": 500,
            "data": []
        }), 500

if __name__ == '__main__':
    app.run(debug=True)