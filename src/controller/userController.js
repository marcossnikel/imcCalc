import user from '../models/User.js';

// Método para listar os usuarios.
class userController {
  static getUsers = (req, res) => {
    user.find((err, users) => {
      if (err) {
        res.status(400).send({ message: `${err.message} - User not Found` });
      }

      res.json(users);
    });
  };

  // IMC Formula

  static getImc = (req, res) => {
    const usuario = {
      name: req.body.name,
      weigth: req.body.weigth,
      heigth: req.body.heigth,
      age: req.body.age,
    };

    const { weigth } = usuario;
    const { heigth } = usuario; // Meters 176 = 1.76

    const imc = weigth / heigth ** 2;

    res.json({
      imc,
    });
  };

  // Harris Benedict Formula (Male)

  static harrisBenedictFormula = (req, res) => {
    const usuario = {
      name: req.body.name,
      weigth: req.body.weigth,
      heigth: req.body.heigth,
      age: req.body.age,
    };

    const { weigth } = usuario;
    const { heigth } = usuario; // Centimeters 1.76 = 176
    const { age } = usuario;

    const harris = 66 + (13.8 * weigth) + (5 * heigth) - (6.8 * age);

    res.json({
      harris,
    });
  };
}

export default userController;
