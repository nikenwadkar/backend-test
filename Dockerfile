FROM node:16-alpine
ADD . ./
RUN npm install -ci
EXPOSE 3001
CMD ["node", "server.js"]