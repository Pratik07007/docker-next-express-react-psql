FROM node:alpine

WORKDIR /next-app

COPY package* .
RUN npm install

COPY ./prisma .
RUN npx prisma generate

COPY . .

EXPOSE 3000

CMD [ "npm","run","dev" ]





