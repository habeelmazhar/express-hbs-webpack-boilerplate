var express = require('express');
var router = express.Router();

var auth = require('../middlewares/auth')

var usersRouter = require('./users');


router.use('/users', usersRouter);


module.exports = router;
