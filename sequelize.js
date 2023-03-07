const Sequelize = require('sequelize')
require('dotenv').config()
const sequelize = new Sequelize(
    'insta_backend',
    process.env.NAME,
    process.env.PASSWORD,
    {
        host: process.env.HOST,
        dialect: 'mysql'
    }

)

module.exports = sequelize