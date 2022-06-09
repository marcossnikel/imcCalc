import express from 'express';
import UserController from '../controller/userController.js';
import FormulaController from '../controller/formulaController.js';
import user from '../models/User.js';

const router = express.Router();

router
  .get('/users',UserController.getUsers)
  .get('/users/:id',UserController.getUserId)
  .post('/formulas/imc', FormulaController.getImc)
  .post('/formulas/harris', FormulaController.maleHarris)

export default router;
