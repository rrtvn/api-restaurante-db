import jwt from 'jsonwebtoken'
import User from '../models/User'
import Role from '../models/Role.js'
import { SECRET } from '../config'

export const signUp = async (req, res) => {

    try {
        const { rut, email, password } = req.body;

        // creacion de un nuevo Usuario
        const userAuth = new User({
            rut,
            email,
            password,
        });

        // revisamos los roles
        if (userAuth.roles == "user") {
            console.log('El tipo de usuario es:', userAuth.roles);
        } else {
            if (userAuth.roles == "admin") {
                console.log('El tipo de usuario es:', userAuth.roles);
                //creamos un token
                const token = jwt.sign({ id: savedUserAuth._id }, SECRET, {
                    expiresIn: 86400, //24 horas en segundos
                });

                res.status(200).json({ token });
            }
        }
    } catch (error) {
        res.status(500).json(error.message);
    }

}

export const signInHandler = async (req, res) => {
    try {
        console.log(req.body.email);
        const userFound = await User.findOne({email: req.body.email}).populate(
            'roles'
        );
        console.log(userFound);
        console.log(req.body.email);
        
        if (!userFound) return res.status(400).json({message: 'Usuario no encontrado, intente nuevamnete.'});
       
        const password = req.body.password;
        const recivedPassword = userFound.password;
        console.log(recivedPassword);
        console.log(password);
       
        const validarPassword = await User.comparePassword(
            password,
            recivedPassword
        );
        console.log(validarPassword);

        if (!validarPassword) {
            return res.status(401).json({
                token: null,
                message: "Invalid Password"
            })
            
        }
        const token = jwt.sign({ id: userFound._id }, SECRET, {
            expiresIn: 86400, // 24 hours
          });
      

        res.json({ token });
        console.log(token);
        

    } catch (error) {
        console.log(error.message)
    }
}