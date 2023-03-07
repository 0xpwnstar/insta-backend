const express = require('express');
const app = express();
require('dotenv').config()
const Sequelize = require('sequelize')
const PORT = process.env.PORT || 4111;
app.use('/', async (req,res) => { 
    const sequelize = new Sequelize(
        'insta_backend',
        process.env.NAME,
        process.env.PASSWORD,
         {
           host: process.env.HOST,
           dialect: 'mysql'
         }
    );
    sequelize.authenticate().then(async () => {
        console.log('Connection has been established successfully.');
        res.json({"Success":1})
        res.send()
        await sequelize.close()
    }).catch((error) => {
        console.error('Unable to connect to the database: ', error);
    });

}) 
app.use('/api', require('./routes/index'));
app.listen(PORT, console.log("Listenening on ",  PORT) );
