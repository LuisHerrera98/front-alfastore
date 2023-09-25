FROM node:18

WORKDIR /usr/src/app

RUN npm install -g http-server

COPY . .

EXPOSE 3001
CMD ["http-server", "dist", "-p3001"]