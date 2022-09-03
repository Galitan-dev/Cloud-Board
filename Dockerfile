FROM node:16.17.0-alpine AS base
WORKDIR /home/app

FROM base AS dependencies
COPY tools tools
COPY package.json package.json
RUN yarn

FROM base AS config
ARG PORT=3000
EXPOSE ${PORT}
ENV PORT ${PORT}

FROM config AS development
COPY --from=dependencies /home/app/node_modules node_modules
COPY --from=dependencies /home/app/static/webviewer static/webviewer
COPY . .
CMD ["yarn", "dev", "--hostname", "0.0.0.0"]