FROM nginx:1.24-alpine

EXPOSE 80

# Expect built CRA output in /build (Create React App defaults)
# The Makefile copies this Dockerfile into ./build, with the site in ./build/dist
# Align with that layout by copying ./dist to the nginx root.
COPY dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

CMD ["nginx", "-g", "daemon off;"]
