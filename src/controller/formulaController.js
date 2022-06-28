import user from '../models/User.js'
import maleHarris from '../utils/formulas/harrisMale.js'
import imc from '../utils/formulas/imc.js'

class FormulaController {

   static getImc = (req, res) => {
    const { height, weihgt } = req.body
    const result = imc(height,weight)
    try {
      return res.json({result});
    } catch (error) {
      res.json(error.message);
    }
  }


  static maleHarris = (req, res) => {
    const {weight, height, age} = req.body;
    const result = maleHarris(weight,height,age)
    try {
      res.json({result});
    } catch (error) {
      res.json(error.message)
    }
  }
}



export default FormulaController;