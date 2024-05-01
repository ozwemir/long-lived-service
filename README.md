# What This App Does
- This application provides a RESTful API to create and query keys based on client requests. It is designed to store keys in a database and allows clients to submit new keys and retrieve them as needed.


# Getting Started

- If Docker is already installed, you can start the API service by running the following command:
```
docker-compose -f docker-compose.yml up -d
```
- to run the application in development mode, use the following command
```
npm run dev
```

- to build the application, use the following command
```
npm run build
```

- To run the built application, use the following command
```
npm start
```

# API Endpoints
- Create Key Endpoint: POST /input
- Query Key Endpoint: GET /query