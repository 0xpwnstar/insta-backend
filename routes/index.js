const  express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send("You are visiting Mars "))

module.exports = router;