const express = require('express');
const app = express();
require('dotenv').config()
const PORT = process.env.PORT || 4111;
require('dotenv').config();

app.use('/', async (req,res) => { 
    
    

}) 
app.use('/api', require('./routes/index'));
app.listen(PORT, console.log("Listenening on ",  PORT) );
