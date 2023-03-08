const express = require('express');
const app = express();
const models = require('./models')
const config = require('./config')
const PORT = config.port || 4111;
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
var corsOptions = {
    origin: "http://127.0.0.1:3000"
}

app.use(cors(corsOptions));
app.use(bodyParser.json())
app.use(cookieParser())
app.use('/',(req,res,next) => { 
    next()
}) 
app.use('/api', require('./routes'));
models.sequelize.sync({}).then(() => {
    app.listen(PORT, console.log("Listenening on ",  PORT) );
})
