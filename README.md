# APEX Client

This project is an API developed with NestJS that connects to a MongoDB database to manage clients.

## Prerequisites

- [Node.js](https://nodejs.org/en/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Project Setup

### 1. Clone the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/eldalo/apex-client
cd apex-client
```

## 2. Project setup

```bash
$ npm install
```

## 3. Set Up Environment Variables

Create a .env file in the root of the project with the following configuration to connect to MongoDB:

| Variable Name      | Default Value  | Required |
| ------------------ | -------------- | -------- |
| `MONGODB_USERNAME` | `apex_user`    | Yes      |
| `MONGODB_PASSWORD` | `abc123qwerty` | Yes      |
| `MONGODB_DATABASE` | `db_apex`      | Yes      |

## 4. Running MongoDB

```bash
$ docker compose up -d && docker compose start
```

## 5. MongoDB CLI - create user and database

```bash
use db_apex
db.createUser({ user: "apex_user", pwd: "abc123qwerty", roles: [ { role: "readWrite", db: "db_apex" } ]})
```

## 6. Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

The API will be available at http://localhost:3000.

## Endpoints

#### 1. Get Clients

- Path: `/clients`
- Method: GET
- Description: Retrieves a list of clients.

#### 2. Get a Portfolio by ID

- Path: `/clients/:id`
- Method: GET
- Description: Retrieves the details of a specific client by its ID.
