require('dotenv').config();
module.exports= {
    username: process.env.NAME,
    password: process.env.PASSWORD,
    database: "insta_backend",
    host: process.env.HOST,
    dialect: "mysql",
    port: process.env.PORT,
    jwtsecret: process.env.JWTSECRET

}
