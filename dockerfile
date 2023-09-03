FROM node:18

WORKDIR /app

COPY ./dist ./dist

RUN npm install -g http-server

EXPOSE 3001

CMD ["http-server", "dist", "-p", "3001"]