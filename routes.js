const express = require('express'),
    userController = require('./src/controllers/usersControllers'),
    routes = express.Router(),
    JWT = require('./src/jwt');

routes.post('/users', userController.create);
    
routes.get('/users', userController.getAll);

routes.post('/users/login', userController.login);

routes.get('/ping', (req, res) => res.status(200).send('pong'));

module.exports = routes;