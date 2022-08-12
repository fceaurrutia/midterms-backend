FROM node:16-alpine AS base
WORKDIR /app
COPY . /app
RUN yarn install
RUN yarn build

FROM node:16-alpine as node_modules
WORKDIR /app
COPY --from=base ./app/package.json .
COPY --from=base ./app/yarn.lock .

FROM node:16-alpine AS production
WORKDIR /app
COPY --from=node_modules ./app/node_modules ./node_modules
COPY --from=base ./app/node_modules/@prisma ./node_modules/@prisma
COPY --from=base ./app/node_modules/.prisma ./node_modules/.prisma
COPY --from=base ./app/dist ./dist
COPY --from=base ./app/package.json ./package.json
CMD ["yarn","start"]