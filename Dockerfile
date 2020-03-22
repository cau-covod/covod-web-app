# Build static files
FROM node:13-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY . /app

ARG REACT_APP_API_BASE_URL
ARG REACT_APP_CLIENT_ID
ARG REACT_APP_CLIENT_SECRET

RUN npm ci --silent
RUN npm run build

# production environment
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/prod.conf /etc/nginx/conf.d/nginx.conf
EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]