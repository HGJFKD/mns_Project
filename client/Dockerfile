FROM node:16 as builder

# Create app directory
WORKDIR /app


# Install app dependencies
COPY ./vite-project/package*.json ./

RUN npm i

COPY . ./vite-project

RUN npm run build

FROM node:16


# Create app directory
WORKDIR /app

# Install app dependencies
COPY ./vite-project/package*.json ./

RUN npm i 

COPY --from=builder /app/ ./

EXPOSE 3000
CMD ["/usr/local/bin/npm", "run", "dev"]
