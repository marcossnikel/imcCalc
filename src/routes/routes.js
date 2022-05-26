import express from 'express';
import userController from '../controller/userController.js';

const router = express.Router();

router
  .get('/users', (req, res) => {
    res.status(200).send('batata');
  })

  .post('/users', userController.getImc);

export default router;
