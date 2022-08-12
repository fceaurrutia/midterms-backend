FROM node:16-alpine AS base
WORKDIR /app
COPY . /app
RUN yarn install
RUN yarn build

FROM node:16-alpine AS production
WORKDIR /app
COPY --from=base ./app .
CMD ["yarn","start"]