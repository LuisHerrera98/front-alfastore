FROM node:18

WORKDIR /app

# COPY ./dist ./dist

RUN npm install

EXPOSE 3001

CMD ["npm", "run", "dev"]