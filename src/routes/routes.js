import express from 'express';
import userController from '../controller/userController.js';
import user from '../models/User.js';

const router = express.Router();

router
  .get('/users', (req, res) => {
    res.status(200).send('batata');
  })

  .post('/users', userController.getImc)
  .post('/users/harris', userController.harrisBenedictFormula);

export default router;
