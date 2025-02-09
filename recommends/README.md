## 🚀 빠른 시작 가이드

### 필수 설치 항목

- [Docker](https://www.docker.com/get-started)
- [Postman](https://www.postman.com/downloads/) (API 테스트용)

### 환경 변수 설정

`.env` 파일을 생성하고 다음 내용을 추가합니다:

```env
ANTHROPIC_API_KEY=your_api_key_here
REDIS_HOST=34.64.98.78
REDIS_PORT=6379
REDIS_PASSWORD=your_password_here
```

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
    
env 파일을 만들어서(파일은 김시온에게 문의) `docker run` 할 때 파일을 명시해줘야 합니다.

추후 배포환경에서는 k8s의 secret을 사용하여 환경변수를 설정할 예정입니다.
```bash
docker run -d --env-file .env -p 8000:8000 studio-recommender
```

이제 API가 `http://localhost:8000`에서 실행됩니다.

### API 테스트

Postman이나 curl을 사용하여 API를 테스트할 수 있습니다:

```bash
curl "http://localhost:8000/api/recommends?message=서울에 있는 모던한 스튜디오"
```
