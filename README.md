

## Backend

The backend uses:
- Spring boot 3.4.3
- docker
- Mysql

### Start project

First you need to position yourself on the `courses_be` directory.
It uses `Java 21`
 
#### Database
```bash
# This will initiate the database with the schema

docker-compose up -d
```
#### API

```bash
# install and start the BE

mvn clean install -DskipTests
mvn spring-boot:run
```


## Frontend

The Frontend uses:
- vite
- React
- mui/material(Material ui)
- axios

### Start project

First you need to position yourself on the `courses-fe` directory. Remember the project was createde using `Node 20(v20.19.0)`

```bash
# This will initiate the database with the schema

yarn install
yarn dev
```


