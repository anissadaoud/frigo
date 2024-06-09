FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY dist .
COPY nginx.conf /etc/nginx/nginx.conf