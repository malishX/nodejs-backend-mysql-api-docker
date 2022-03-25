# My Tech API 

## APIs

- Health Check API
- User Managemnt APIs
    - List Users
    - Create User
    - Delete User
- Member Management APIs
    - List Members
    - Create Member
    - Delete Member

## Tech
- Node JS v17 : Back-End
- MySQL : Database
- Express JS : NodeJs framework
- Sequelize : ORM for NodeJs
- JOI : Validation package

## Installation
### On Local Enviornment (Option : 1)
1) Pull the code from Repo.
2) Create `.env` file on project root.
3) Configure `.env` parameteres as below / Just rename `.env.example` to `.env` and make the required changes on env values:
4) Create the new MySQL DB on your machine.
```sh
NODE_ENV=development
PORT=3000
APP_KEY=hM2BG1aMEMLJTIDHSMtxc3vgg1pPDae1

DB_HOST=localhsot
DB_NAME=my_tech_database
DB_USERNAME=root
DB_PASSWORD=root
DB_PORT=3306
```
Run below commands on project root terminal:
```sh
npm i
npm i -g sequelize-cli
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
npm run dev
```
Go to postman and call the Health API:
```sh
http://localhost:3000/health
```

### On Docker Enviornment (Option : 2)
1) Pull the code from Repo.
2) Create `.env` file on project root.
3) Configure `.env` parameteres as below / Just rename `.env.example` to `.env` and make the required changes on env values:
4) Create the new MySQL DB on your machine.
```sh
NODE_ENV=development
PORT=3000
APP_KEY=hM2BG1aMEMLJTIDHSMtxc3vgg1pPDae1

DB_HOST=host.docker.internal
DB_NAME=my_tech_database 
DB_USERNAME=root
DB_PASSWORD=root
DB_PORT=3306
```
Run below commands on project root terminal:
```sh
docker-compose up --build
```

Run below commands on second terminal:
```sh
docker exec -it my-tech-nodejs npx sequelize-cli db:migrate
docker exec -it my-tech-nodejs npx sequelize-cli db:seed:all
```

Go to postman and call the Health API:
```sh
http://localhost:7300/health
```
## API Documentation

```
https://documenter.getpostman.com/view/12797022/UVsPNQ7v
```

Postman collection is added on code repo. You can import `My Tech.postman_collection.json` to your postman workspace and test the api.
