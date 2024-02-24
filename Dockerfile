FROM node:18.2.0 as builder
WORKDIR /app
#FROM node:16.20.2 as builder
COPY ./package.json  ./
RUN npm i --force --no-progress --depth 0 --loglevel verbose
COPY . .
RUN npm run build

FROM nginx:1.19.0
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/build .
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
