const express = require('express');
const app = express();
require('dotenv').config()
const sequelize = require('./models/sequelize');
const PORT = process.env.PORT || 4111;
sequelize.authenticate().then(() => {
    console.log('Connection has been established')
}).catch((error) => {
    console.log(error)
})
app.use('/api', require('./routes/index'));
app.listen(PORT, console.log("Listenening on ",  PORT) );
