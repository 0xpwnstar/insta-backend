const express = require('express');
const app = express();
const models = require('./models')
const config = require('./config')
const PORT = config.port || 4111;



app.use('/', async (req,res) => { 
    const insert = await models.sequelize.sync()
    const result = await models.sequelize.query("show tables;")
    res.json({result,
        insert
    })
}) 
app.use('/api', require('./routes/index'));
app.listen(PORT, console.log("Listenening on ",  PORT) );
