This project is the creation of the back end for an e-commerce site. This application used Express.js API and Sequelize to interact with a MySQL database. This application displays creation of database using mySQL with models and associations. Then demonstrates the API Routes to perform RESTful CRUD operations 


Some important commands of this project given below



npm init

npm install express, sequelize, dotenv, mysql2, body-parser --save

npm install sequelize-cli

npx sequqlize init

npx sequelize db:create

npx sequelize model:generate --name Categories --attributes name:text,description:text

Post API: localhost:2500/ecomm/api/v1/categories { "description":"about Fashion", "name" :"Fashion" }

GET API: localhost:2500/ecomm/api/v1/categories localhost:2500/ecomm/api/v1/categories/1

PUT API: localhost:2500/ecomm/api/v1/categories/1 { "name" : "bank", "description":"about bank & payment" }

DELETE API: localhost:2500/ecomm/api/v1/categories/1npm init

npm install express, sequelize, dotenv, mysql2, body-parser --save

npm install sequelize-cli

npx sequqlize init

npx sequelize db:create

npx sequelize model:generate --name Categories --attributes name:text,description:text

Post API: localhost:2500/ecomm/api/v1/categories { "description":"about Fashion", "name" :"Fashion" }

GET API: localhost:2500/ecomm/api/v1/categories localhost:2500/ecomm/api/v1/categories/1

PUT API: localhost:2500/ecomm/api/v1/categories/1 { "name" : "bank", "description":"about bank & payment" }

DELETE API: localhost:2500/ecomm/api/v1/categories/1
