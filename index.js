const express = require('express');
const app = express();
require('dotenv').config()
const PORT = process.env.PORT || 4111;
const Sequelize = require('./sequelize')

app.use('/', async (req,res) => { 
    
    sequelize.authenticate().then(async () => {
        console.log('Connection has been established successfully.');
        res.json({"Success":1})
    }).catch((error) => {
        console.error('Unable to connect to the database: ', error);
    });

}) 
app.use('/api', require('./routes/index'));
app.listen(PORT, console.log("Listenening on ",  PORT) );
