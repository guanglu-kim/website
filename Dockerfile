FROM nginx:alpine AS base

RUN rm -rf /usr/share/nginx/html/*

COPY /ssl /etc/nginx/

COPY default.conf /etc/nginx/conf.d/default.conf

COPY /dist /usr/share/nginx/html/

ADD startup.sh /startup.sh

RUN chmod +x /startup.sh

ENTRYPOINT ["sh", "/startup.sh"]