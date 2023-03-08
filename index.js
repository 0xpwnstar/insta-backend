const express = require('express');
const app = express();
const models = require('./models')
const config = require('./config')
const PORT = config.port || 4111;
const bodyParser = require('body-parser')

app.use('/',(req,res,next) => { 
    bodyParser.json()
    next()
}) 
app.use('/api', require('./routes'));
models.sequelize.sync({}).then(() => {
    app.listen(PORT, console.log("Listenening on ",  PORT) );
})
