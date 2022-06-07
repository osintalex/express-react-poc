FROM node:16-buster-slim AS frontend-builder

WORKDIR /app/frontend
COPY frontend/package.json frontend/yarn.lock frontend/tsconfig.json ./
COPY frontend/public public/
COPY frontend/src src/
RUN yarn install --frozen-lockfile
RUN yarn build

FROM node:16-buster-slim AS backend-builder

WORKDIR /app/backend
COPY backend/package.json backend/yarn.lock backend/tsconfig.json ./
COPY backend/src/ src/
# Installs dev dependencies
RUN yarn install --frozen-lockfile
RUN yarn build

FROM node:16-buster-slim

# Means yarn will only install prod dependencies
ENV NODE_ENV="production"
RUN mkdir -p /home/node/app && chown -R node:node /home/node/app
USER node
WORKDIR /home/node/app
COPY --chown=node:node backend/package.json backend/process.yaml backend/yarn.lock ./
COPY --from=backend-builder --chown=node:node /app/backend/dist dist/
COPY --from=frontend-builder --chown=node:node /app/frontend/build build/
RUN yarn install --frozen-lockfile
EXPOSE 8000
CMD yarn pm2-runtime ./process.yaml
