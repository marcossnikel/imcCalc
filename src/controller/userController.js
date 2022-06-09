import user from '../models/User.js';

// Método para listar os usuarios.
class UserController {
  static getUsers = (req, res) => {
    try{
      user.findAll((users)=>{
        return res.json(users);
      }) 
      
    }catch(error){
      return res.json(error.message);
    }

  };


  static getUserId = (req, res) => {
    const { id } = req.params
    try {
      const oneUser = user.findOne({
        where: {
          id: Number(id)
        },
      })
      return res.json(oneUser)
    } catch (error) {
      res.json(error.message);
    }
  }
}

export default UserController;
