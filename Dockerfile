FROM node:16-alpine as base
RUN npm install -g npm@latest
USER node
RUN mkdir -p /home/node/app
WORKDIR /home/node/app


FROM base as dev
ENV NODE_ENV=development
STOPSIGNAL SIGINT
ENTRYPOINT npm install; exec "$0" "$@"
CMD [ "node", "./node_modules/webpack/bin/webpack.js", "--watch" ]


FROM base as build
COPY --chown=node:node package*.json ./
RUN npm ci
COPY --chown=node:node ./ ./
RUN npm run lint \
 && npm run build \
 && npm prune --production


FROM base as prd
ENV NODE_ENV=production
COPY --from=build /home/node/app/node_modules ./node_modules/
COPY --from=build /home/node/app/dist ./dist/
CMD [ "node", "dist/web.js" ]
