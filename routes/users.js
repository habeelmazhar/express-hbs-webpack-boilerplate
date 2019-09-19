var express = require('express');
var router = express.Router();

var usersController = require('../controllers/users')

var usersValidator = require('../validators/users')

/* GET users listing. */
router.get('/', usersValidator.userLogin, usersController.index );

module.exports = router;
