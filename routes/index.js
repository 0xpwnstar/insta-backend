const  express = require('express');
const router = express.Router();
const models = require('../models');
const { signup, login } = require('../controllers/user')
router.get('/', (req, res) => res.send("You are visiting Mars "))
// router.post('/login',(req, res) => User.login)
router.post('/signup',signup)
router.post('/login',login)

module.exports = router;