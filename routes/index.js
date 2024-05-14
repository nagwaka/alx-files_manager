import express from 'express';
import AppController from '../controllers/AppController';
import UsersController from '../controllers/UsersController';
import AuthController from '../controllers/AuthController';

const routesController = (app) => {
  const router = express.Router();
  app.use('/', router);
  // return if Redis is alive and if the DB is alive
  router.get('/status', (req, res) => {
    AppController.getStatus(req, res);
  });
  // return the number of users and files in DB
  router.get('/stats', (req, res) => {
    AppController.getStats(req, res);
  });
  // create a new user in DB
  router.post('/users', (req, res) => {
    UsersController.postNew(req, res);
  });
  // signs in a  user by generating a new authentication token
  router.get('/connect', (req, res) => {
    AuthController.getConnect(req, res);
  });
  // signs out a user based on the token
  router.get('/disconnect', (req, res) => {
    AuthController.getDisconnect(req, res);
  });
  // retrieves a  user base on the token used
  router.get('/users/me', (req, res) => {
    UsersController.getMe(req, res);
  });
};

export default routesController;
