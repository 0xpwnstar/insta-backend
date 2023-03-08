const  express = require('express');
const router = express.Router();
const models = require('../models');
const { signup } = require('../controllers/user')
router.get('/', (req, res) => res.send("You are visiting Mars "))
// router.post('/login',(req, res) => User.login)
router.get('/signup',(req,res) => signup)

module.exports = router;