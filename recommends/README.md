> 본 브랜치는 dev/fe에서 뽑아낸 브랜치입니다. 2024/11/13-10:20 기준

# Studio Recommendation API

웨딩 스튜디오 추천 API 서비스입니다. 사용자의 자연어 입력을 기반으로 조건에 맞는 스튜디오를 추천해주는 API를 제공합니다.

## 🚀 Quick Start Guide

### 필수 설치 항목

- [Docker](https://www.docker.com/get-started)
- [Postman](https://www.postman.com/downloads/) (API 테스트용)

### 로컬 환경에서 실행하기

1. 프로젝트 클론
```bash
git clone [repository-url]
cd [project-directory]
```

2. Docker 이미지 빌드
```bash
docker build -t studio-recommender .
```

3. Docker 컨테이너 실행
```bash
docker run -d -p 8000:8000 --name studio-recommender-app studio-recommender
```

### API 엔드포인트

#### GET /api/recommends

스튜디오 추천을 요청하는 엔드포인트입니다.

**Base URL**: `http://localhost:8000`

**Endpoint**: `/api/recommends`

**Method**: `GET`

**Query Parameters**:
- `message` (required): 사용자의 검색 요청 메시지

**예시 요청**:
```http
GET http://localhost:8000/api/recommends?message=서울에 있는 50만원 이하 스튜디오
```

**성공 응답 (200 OK)**:
```json
***REMOVED***
    "message": "",
    "status": 200,
    "data": [
        ***REMOVED***
            "id": 1,
            "type": "STUDIO",
            "name": "모던 웨딩 스튜디오",
            "price": "500,000",
            "address": "서울"
        ***REMOVED***
    ]
***REMOVED***
```

**에러 응답 (400 Bad Request)**:
```json
***REMOVED***
    "message": "메시지가 필요합니다",
    "status": 400,
    "data": []
***REMOVED***
```

### 테스트 예시 메시지

다음과 같은 형식의 메시지로 테스트해볼 수 있습니다:

```
- 서울에 있는 50만원 이하 스튜디오
- 100만원 이상의 럭셔리 스튜디오
- 저렴한 스튜디오 추천해줘
- 서울에 있는 모던한 스튜디오
- 50만원에서 100만원 사이 스튜디오
```

### 지원하는 검색 조건

- **가격 범위**:
  - "N만원 이하" - 특정 가격 이하
  - "N만원 이상" - 특정 가격 이상
  - "N만원에서 M만원" - 가격 범위 지정
  - "저렴한", "비싼", "고급", "럭셔리" 등의 표현

- **지역**: 서울, 부산, 인천, 제주 등

- **스타일**: 모던한, 빈티지, 럭셔리, 클래식 등

## 🛠 유용한 Docker 명령어

```bash
# 컨테이너 상태 확인
docker ps

# 로그 확인
docker logs studio-recommender-app

# 실시간 로그 확인
docker logs -f studio-recommender-app

# 컨테이너 중지
docker stop studio-recommender-app

# 컨테이너 재시작
docker start studio-recommender-app

# 컨테이너 삭제
docker rm studio-recommender-app

# 컨테이너 중지 및 삭제
docker stop studio-recommender-app && docker rm studio-recommender-app
```

## 🔍 문제 해결

1. **포트 충돌 발생 시**:
   - 8000번 포트가 이미 사용 중인 경우, 다른 포트로 매핑하여 실행
   ```bash
   docker run -d -p 8001:8000 --name studio-recommender-app studio-recommender
   ```

2. **컨테이너가 시작되지 않는 경우**:
   - 로그를 확인하여 오류 메시지 확인
   ```bash
   docker logs studio-recommender-app
   ```

3. **API 응답이 오지 않는 경우**:
   - 컨테이너가 실행 중인지 확인
   - 로그에서 오류 메시지 확인
   - Redis 연결 상태 확인

## 📝 참고사항

- API는 Redis 데이터베이스에 연결되어 있으며, Redis 서버가 정상적으로 실행 중이어야 합니다.
- 가격 조건은 만원 단위로 처리됩니다.
- 자연어 처리를 통해 다양한 형태의 검색어를 지원합니다.

## 🤝 기술 지원

문제가 발생하거나 추가 지원이 필요한 경우 다음 연락처로 문의해주세요:
- Email: [support-email]
- Issue Tracker: [github-issues-url]
