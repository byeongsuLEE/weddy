import pytest
from flask import Flask
import redis
import json
from unittest.mock import Mock, patch
from app import app, redis_client, extract_price_conditions, apply_price_conditions, preprocess_input

@pytest.fixture
def client():
    """Flask 테스트 클라이언트 생성"""
    app.config['TESTING'] = True
    return app.test_client()

@pytest.fixture
def mock_redis():
    with patch('app.redis_client') as mock:
        mock.ping.return_value = True
        yield mock

def test_extract_price_conditions():
    """가격 조건 추출 테스트"""
    test_cases = [
        {
            'input': '50만원 이하 스튜디오',
            'expected': [('less_than', 500000)]
        },
        {
            'input': '100만원 이상의 럭셔리한 스튜디오',
            'expected': [('greater_than', 1000000), ('greater_than', 1000000)]
        },
        {
            'input': '저렴한 스튜디오 추천해줘',
            'expected': [('less_than', 500000)]
        },
        {
            'input': '50만원에서 100만원 사이 스튜디오',
            'expected': [('range', (500000, 1000000))]
        }
    ]

    for case in test_cases:
        conditions = extract_price_conditions(case['input'])
        assert conditions == case['expected'], f"Failed for input: {case['input']}"

def test_api_recommendations(client, mock_redis):
    """API 엔드포인트 통합 테스트"""
    mock_data = [
        {
            'id': '1',
            'name': '모던 웨딩 스튜디오',
            'type': 'STUDIO',
            'price': 500000,
            'address': '서울',
            'images': '[]'
        }
    ]
    
    mock_redis.keys.return_value = ['product:1']
    mock_redis.hgetall.return_value = mock_data[0]
    
    response = client.get('/api/recommends?message=서울 스튜디오')
    assert response.status_code == 200
    data = json.loads(response.data)
    assert len(data['data']) >= 0

def test_error_handling(client, mock_redis):
    """에러 처리 테스트"""
    mock_redis.ping.side_effect = redis.ConnectionError()
    
    response = client.get('/api/recommends?message=테스트')
    assert response.status_code == 500
    data = json.loads(response.data)
    assert data['message'] == "데이터베이스 연결 오류"

if __name__ == '__main__':
    pytest.main(['-v'])