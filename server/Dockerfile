# syntax=docker/dockerfile:1
# Build context is the repo root: the server imports ../shared-models.

FROM node:22-alpine AS build
WORKDIR /app/server
COPY server/package.json server/package-lock.json ./
RUN npm ci
COPY shared-models /app/shared-models
COPY server ./
RUN npm run build && npm prune --omit=dev

FROM node:22-alpine
ENV NODE_ENV=production
WORKDIR /app/server
COPY --from=build /app/server/package.json ./
COPY --from=build /app/server/node_modules ./node_modules
COPY --from=build /app/server/dist ./dist
USER node
EXPOSE 5000
CMD ["node", "."]
