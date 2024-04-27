FROM node:21-alpine3.18

RUN apk update && apk upgrade
RUN apk add git