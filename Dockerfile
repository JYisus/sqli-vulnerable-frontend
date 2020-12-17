FROM node:lts-alpine3.12

WORKDIR /app

COPY package.json /app/package.json

COPY . /app
RUN cd /app; npm install

CMD ["npm","start"]

EXPOSE 3000

