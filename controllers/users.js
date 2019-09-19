const UserModel = require('../models/user');

exports.index = function (req, res, next) {
    req.session.name = 'Habeel';
    res.send('respond with a resource');
}