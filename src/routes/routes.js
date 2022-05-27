import express from 'express';
import UserController from '../controller/userController.js';
import user from '../models/User.js';

const router = express.Router();

router
  .get('/users', (req, res) => {
    res.status(200).send('batata');
  })

  .post('/users', UserController.getImc)
  .post('/users/harris', UserController.harrisBenedictFormula);

export default router;
