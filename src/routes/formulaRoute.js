import express from 'express';
import FormulaController from '../controller/formulaController.js';


const router = express.Router();

router
  .post('/formulas/imc', FormulaController.getImc)
  .post('/formulas/harris', FormulaController.maleHarris)

export default router;
