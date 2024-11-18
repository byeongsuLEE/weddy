FROM node:20 AS build

ENV NODE_OPTIONS=--max_old_space_size=1600

# 작업 디렉토리 설정
WORKDIR /app

# 의존성 파일을 복사하고 설치
COPY package*.json ./
RUN npm install

# 소스 코드 복사 및 빌드..
COPY . .
RUN npm run build

# 최후의 방법 사용후 바로 삭제
# RUN rm -rf node_modules

# Step 2: Production Stage
# Nginx를 사용하여 정적 파일을 서빙
FROM nginx:alpine

# Nginx의 기본 HTML 디렉토리에 빌드된 파일 복사
COPY --from=build /app/dist /usr/share/nginx/html

# Nginx 설정 파일 복사
COPY nginx.conf /etc/nginx/nginx.conf

# Nginx가 사용하는 포트 노출
EXPOSE 80

# Nginx 실행1
CMD ["nginx", "-g", "daemon off;"]
# test 1
