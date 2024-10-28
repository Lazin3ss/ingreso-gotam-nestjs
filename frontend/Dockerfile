FROM node:18-alpine AS build
WORKDIR /app/frontend
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build --prod

FROM nginx AS ngi
COPY --from=build /app/frontend/dist/ingreso-gotam-angular/browser /usr/share/nginx/html
COPY nginx.conf  /etc/nginx/conf.d/default.conf
EXPOSE 80