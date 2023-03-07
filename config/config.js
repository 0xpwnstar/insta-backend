require('dotenv').config({path:__dirname+'/../../.env'});
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
