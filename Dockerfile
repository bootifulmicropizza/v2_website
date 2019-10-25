FROM nginx

EXPOSE 80

RUN rm -rf /usr/share/nginx/html/*
COPY ./src/nginx.conf /etc/nginx/nginx.conf
COPY ./dist /usr/share/nginx/html
CMD /bin/bash -c "nginx -g 'daemon off;'"
