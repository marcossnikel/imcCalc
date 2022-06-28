import express from 'express';
import UserController from '../controller/userController.js';

const router = express.Router();

router
  .get('/users',UserController.getUsers)
  .get('/users/:id',UserController.getUserId)


  export default router;