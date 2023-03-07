const express = require('express');
const app = express();
require('dotenv').config()
const Sequelize = require('sequelize')
const sequelize = new Sequelize(
    'insta_backend',
    'admin',
    'C7508tan!',
     {
       host: 'database-2.cluster-ro-cyrq7glzuytr.ap-south-1.rds.amazonaws.com',
       dialect: 'mysql'
     }
);
const PORT = process.env.PORT || 4111;
app.use('/', async => { 
    sequelize.authenticate().then(() => {
        console.log('Connection has been established successfully.');
    }).catch((error) => {
        console.error('Unable to connect to the database: ', error);
    });
    sequelize.close();
}) 
app.use('/api', require('./routes/index'));
app.listen(PORT, console.log("Listenening on ",  PORT) );
