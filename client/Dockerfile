# syntax=docker/dockerfile:1
# Build context is the repo root: the client imports ../shared-models.

# --- Stage 1: build the Angular app ---
FROM node:22-alpine AS build
WORKDIR /app/client
COPY client/package.json client/package-lock.json client/.npmrc ./
RUN npm ci
COPY shared-models /app/shared-models
COPY client ./
RUN npx ng build

# --- Stage 2: serve it with nginx, proxying /api to the server ---
FROM nginxinc/nginx-unprivileged:alpine AS runtime
COPY --from=build --chown=101:101 /app/client/dist/client/browser /usr/share/nginx/html
COPY client/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
USER 101
HEALTHCHECK --interval=30s --timeout=3s CMD wget -qO /dev/null http://127.0.0.1:8080/ || exit 1
CMD ["nginx", "-g", "daemon off;"]
