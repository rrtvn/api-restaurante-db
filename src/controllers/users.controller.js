import jwt from 'jsonwebtoken'
import User from '../models/User.js'
import Role from '../models/Role.js'
import config from '../config.js'

export const createUser = async (req, res) => {

    try {
        const { rut, name, lastName, email, phone, password, roles } = req.body//FALTARIA tipoUser COMO VARIABLE A INGRESAR

        console.log(req.body)
        

        const user = new User({
            rut,
            name,
            lastName,
            email,
            phone,
            password, 

        });

        if (roles) {
             const foundRoles = await Role.find({ name: roles.name });
             user.roles = foundRoles.map((role) => role._id);
        } 
        //     const role = await Role.findOne({ name: "user" });
        //     user.roles = [role._id];
        // }


        user.password = await User.encryptPassword(user.password);
        //COPIA DEL USUARIO QUE SE A GUADADO
        const savedUser = await user.save()

        // const token = jwt.sign({ id: savedUser._id }, config.SECRET , {
        //     expireIn: 86400, //24 horas en segundos. tiempo de duracion 
        // })

        //CODIGOS DE ESTADO, PARA DECIRLE AL NAVEGADOR LO QUE ESTA PASANDO
          res.status(200).json({
            _id: savedUser._id,
            rut: savedUser.rut,
            name: savedUser.name,
            lastName: savedUser.lastName,
            email: savedUser.email,
            phone: savedUser.phone,
            password: savedUser.password,
            roles: savedUser.roles,
        }
          );
    } catch (error) {
        console.error(error.message);
    }

};
export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        //console.log(users);
        return res.json(users);

    } catch (error) {
        console.error(error.message)
    }
}
export const getUserById = async (req, res) => {
    try {
        const user = await User.findById({ _id: req.params.userId });
        return res.status(200).json(user);
    } catch (error) {
        console.error(error.message);
    }

}

export const updateUserById = async (req, res) => {
    const updateUser = await User.findByIdAndUpdate(req.params.userId, req.body, {
        new: true
    })
    res.status(200).json(updateUser);
}
export const deleteUserById = async (req, res) => {
    const { userId } = req.params._id;
    console.log(userId);
    await User.findByIdAndDelete(userId);
    res.status(204).json();
}