FROM nginx:1.24-alpine

EXPOSE 80

COPY dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

CMD ["nginx", "-g", "daemon off;"]
