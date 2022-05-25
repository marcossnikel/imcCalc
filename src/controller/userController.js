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

  // Método para implementação da fórmula

  static getImc = (req, res) => {
    const usuario = {
      name: req.body.name,
      weigth: req.body.weigth,
      heigth: req.body.heigth,
      age: req.body.age,
    };

    function formula() {
      const { weigth } = usuario;
      const { heigth } = usuario;

      const imc = weigth / heigth ** 2;
      return imc;
    }

    res.send(formula);
  };
}

export default userController;
