# Python 3.12 이미지를 기반으로 사용
FROM python:3.12-slim

# 작업 디렉토리 설정
WORKDIR /app

# 필요한 파일 복사
COPY requirements.txt .
COPY app.py .

# 필요한 패키지 설치
RUN pip install --no-cache-dir -r requirements.txt

# Flask 앱이 8000번 포트를 사용하도록 설정
ENV FLASK_APP=app.py
ENV FLASK_RUN_HOST=0.0.0.0
ENV FLASK_RUN_PORT=8000

# 8000번 포트 노출
EXPOSE 8000

# Flask 앱 실행
CMD ["flask", "run"]