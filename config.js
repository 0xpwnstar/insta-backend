require('dotenv').config();
module.exports= {
    username: process.env.NAME,
    password: process.env.PASSWORD,
    database: "insta_backend",
    host: process.env.HOST,
    dialect: "mysql",
    port: process.env.PORT,
    jwtsecret: process.env.JWTSECRET,
    aws_access: process.env.AWS_ACCESS,
    aws_secret: process.env.AWS_SECRET

}
