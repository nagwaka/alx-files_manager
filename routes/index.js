import express from 'express';
import AppController from '../controllers/AppController';
import UsersController from '../controllers/UsersController';
import AuthController from '../controllers/AuthController';
import FilesController from '../controllers/FilesController';

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
  // creates a new file in DB and in disk
  router.post('/files', (req, res) => {
    FilesController.postUpload(req, res);
  });
  // retrieves the file document based on the ID
  router.get('/files/:id', (req, res) => {
    FilesController.getShow(req, res);
  });

  // retrieves all users file documents for a
  // specific parentId and with pagination
  router.get('/files', (req, res) => {
    FilesController.getIndex(req, res);
  });
};

export default routesController;
