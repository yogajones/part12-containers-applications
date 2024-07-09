FROM node:20

ENV VITE_BACKEND_URL=http://localhost:8080/api/

WORKDIR /usr/src/app

COPY . .

RUN npm install

CMD ["npm", "run", "dev", "--", "--host"]