# What This App Does
- This application provides a RESTful API to create and query keys based on client requests. It is designed to store keys in a database and allows clients to submit new keys and retrieve them as needed.


# Getting Started
- If Docker is already installed, you can start the API service by running the following command:
```
docker-compose -f docker-compose.yml up -d
```
- run the app in dev mode
```
npm run dev
```

- run the app in prod mode
```
npm run prod
```

# API Endpoints
- Create Key Endpoint: POST /input
- Query Key Endpoint: GET /query