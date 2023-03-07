require('dotenv').config({path:'/home/ubuntu/insta-backend/.env'});
console.log(process.env.NAME)
module.exports= {
  "development": {
    "username": process.env.NAME,
    "password": process.env.PASSWORD,
    "database": "insta_backend",
    "host": process.env.HOST,
    "dialect": "mysql"
  }
}
