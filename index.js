const express = require('express');
const app = express();
require('dotenv').config()

const PORT = process.env.PORT || 4111;
app.listen(PORT, console.log("Listenening on",  PORT) );
