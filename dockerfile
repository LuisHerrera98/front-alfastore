FROM node:18

WORKDIR /app

RUN npm install

EXPOSE 3001

CMD ["npm", "run", "dev"]