//libs
const express = require('express');
const routes = express.Router();

//controller
const AnnotationController = require('./controllers/AnnotationController');
const PriorityController = require('./controllers/PriorityController');
const ContentController = require('./controllers/ContentController');
const UserController = require('./controllers/UserController');

// Rota Annotations
routes.get('/annotations', AnnotationController.read);
routes.post('/annotations', AnnotationController.create);
routes.delete('/annotations/:id', AnnotationController.delete);

// Rota Priority
routes.get('/priorities', PriorityController.read);
routes.post('/priorities/:id', PriorityController.update);

//Rota Content
routes.post('/contents/:id', ContentController.update);

//Rota Users
routes.get('/user/:id', UserController.findUser);
routes.post('/auth/register', UserController.register);
routes.post('/auth/login', UserController.login);

module.exports = routes;
