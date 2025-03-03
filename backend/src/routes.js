//libs
const express = require('express');
const routes = express.Router();

//controller
const AnnotationController = require('./controllers/AnnotationController');
const PriorityController = require('./controllers/PriorityController');
const ContentController = require('./controllers/ContentController');
const UserController = require('./controllers/UserController');
const CheckingAuth = require('./middleware/checkingAuth');

// Rota Annotations
routes.get('/annotations', CheckingAuth, AnnotationController.read);
routes.post('/annotations', CheckingAuth, AnnotationController.create);
routes.delete('/annotations/:id', CheckingAuth, AnnotationController.delete);

// Rota Priority
routes.get('/priorities', CheckingAuth, PriorityController.read);
routes.post('/priorities/:id', CheckingAuth, PriorityController.update);

//Rota Content
routes.post('/contents/:id', CheckingAuth, ContentController.update);

//Rota auth
routes.get('/user/:id', UserController.findUser);
routes.post('/auth/register', UserController.register);
routes.post('/auth/login', UserController.login);

module.exports = routes;
