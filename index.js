const express = require('express');
const app = express();
const models = require('./models')
require('dotenv').config()
const PORT = process.env.PORT || 4111;
console.log(PORT)


app.use('/', async (req,res) => { 
    const result = await models.sequelize.query("show databases;")
    res.json({result})
}) 
app.use('/api', require('./routes/index'));
app.listen(PORT, console.log("Listenening on ",  PORT) );
