FROM node:4.2
WORKDIR /app
ADD /src /app/src
ADD /data /app/data
COPY package.json /app
COPY bower.json /app
RUN npm install bower -g && npm install &&  bower install --allow-root
EXPOSE 3000
CMD ["node", "./src/server/server.js"]