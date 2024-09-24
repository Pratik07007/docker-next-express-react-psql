FROM node:alpine

WORKDIR /express-backend

COPY package* .
RUN npm install

COPY ./prisma .
RUN npx prisma generate

COPY . .

EXPOSE 4000

CMD [ "npm","run","dev:docker" ]
