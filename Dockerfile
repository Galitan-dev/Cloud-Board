FROM node:v16-alpine AS base
WORKDIR /home/app

FROM base AS dependencies
COPY package.json package.json
RUN yarn

FROM base AS development
COPY . .
COPY --from=dependencies node_modules node_modules
CMD ["yarn", "dev"]