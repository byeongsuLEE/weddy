from flask import Flask, request, jsonify
import anthropic
import json
import redis
import re
from enum import Enum
from typing import List, Tuple, Dict, Any

app = Flask(__name__)

# Redis 연결 설정
redis_client = redis.Redis(
    host='34.64.98.78',
    port=6379,
    password='***REMOVED***!',
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
SEARCHABLE_FIELDS = ***REMOVED***
    "address": 5,
    "price": 5,
    "type": 5,
    "name": 2
***REMOVED***

def create_less_than(value: str) -> Tuple[str, int]:
    return 'less_than', int(value) * 10000

def create_greater_than(value: str) -> Tuple[str, int]:
    return 'greater_than', int(value) * 10000

def create_range(start: str, end: str) -> Tuple[str, Tuple[int, int]]:
    return 'range', (int(start) * 10000, int(end) * 10000)

PRICE_PATTERNS = ***REMOVED***
    # 특정 가격 이하
    r'(\d+)만원\s*(?:이하|미만|까지)': create_less_than,
    
    # 특정 가격 이상
    r'(\d+)만원\s*(?:이상|초과|넘는)': create_greater_than,
    
    # 가격 범위
    r'(\d+)만원에서\s*(\d+)만원': create_range,
***REMOVED***

PRICE_KEYWORDS = ***REMOVED***
    '저렴한': ('less_than', 500000),
    '싼': ('less_than', 500000),
    '값싼': ('less_than', 500000),
    '낮은': ('less_than', 500000),
    '비싼': ('greater_than', 500000),
    '고가': ('greater_than', 1000000),
    '고급': ('greater_than', 1000000),
    '럭셔리': ('greater_than', 1000000),
    '프리미엄': ('greater_than', 800000),
***REMOVED***

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
                
                product = ***REMOVED***
                    'id': int(product_data.get('id', 0)),
                    'name': product_data.get('name', ''),
                    'type': product_data.get('type', ''),
                    'price': int(product_data.get('price', 0)),
                    'address': product_data.get('address', ''),
                    'images': [***REMOVED***'imageUrl': img.imageUrl***REMOVED*** for img in images]
                ***REMOVED***
                products.append(product)
    except Exception as e:
        print(f"Error fetching products from Redis: ***REMOVED***e***REMOVED***")
        raise
    return products

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
                print(f"Error processing pattern ***REMOVED***pattern***REMOVED***: ***REMOVED***e***REMOVED***")
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

def recommend_studios(user_input: str) -> List[Dict[str, Any]]:
    """사용자 입력에 따라 스튜디오 추천"""
    # 가격 조건 추출
    price_conditions = extract_price_conditions(user_input)
    
    # 검색 키워드 추출
    search_terms = preprocess_input(user_input.lower())
    
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
        formatted_studio = ***REMOVED***
            "id": studio["id"],
            "type": studio["type"],
            "name": studio["name"],
            "price": f"***REMOVED***studio['price']:,***REMOVED***",
            "address": studio["address"],
            "images": studio.get("images", [])  # 이미지 정보 추가
        ***REMOVED***
        formatted_studios.append(formatted_studio)
    
    return formatted_studios

@app.route('/api/recommends', methods=['GET'])
def get_recommendations():
    """스튜디오 추천 API 엔드포인트"""
    try:
        # Redis 연결 확인
        redis_client.ping()
        
        # 요청에서 message 파라미터 추출
        message = request.args.get('message')
        if not message:
            return jsonify(***REMOVED***
                "message": "메시지가 필요합니다",
                "status": 400,
                "data": []
            ***REMOVED***), 400

        # 스튜디오 추천 실행
        recommended_studios = recommend_studios(message)

        response = ***REMOVED***
            "message": "",
            "status": 200,
            "data": recommended_studios
        ***REMOVED***

        return jsonify(response), 200

    except redis.ConnectionError:
        return jsonify(***REMOVED***
            "message": "데이터베이스 연결 오류",
            "status": 500,
            "data": []
        ***REMOVED***), 500
    except Exception as e:
        print(f"Error in get_recommendations: ***REMOVED***str(e)***REMOVED***")
        return jsonify(***REMOVED***
            "message": str(e),
            "status": 500,
            "data": []
        ***REMOVED***), 500

if __name__ == '__main__':
    app.run(debug=True)