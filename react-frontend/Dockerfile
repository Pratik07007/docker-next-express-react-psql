FROM node:22-alpine

WORKDIR /react-frontend

COPY package* .
RUN npm install

COPY . .

EXPOSE 5173

CMD [ "npm","run","dev" ]



