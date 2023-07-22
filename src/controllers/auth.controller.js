import jwt from 'jsonwebtoken'
import User from '../models/User'
import Role from '../models/Role.js'
import { SECRET } from '../config'
import { isAdmin } from '../middlewares/authJwt'



export const signInHandler = async (req, res) => {
    try {
        console.log(req.body.email);
        const userFound = await User.findOne({ email: req.body.email }).populate(
            'roles'
        );
        console.log(userFound);
        console.log(req.body.email);

        if (!userFound) return res.status(400).json({ message: 'Usuario no encontrado, intente nuevamnete.' });

        const password = req.body.password;
        const recivedPassword = userFound.password;

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
        next();

        if (!isAdmin) {
            console.log('No posee el role necesario')
        } else {
        }



    } catch (error) {
        console.log(error.message)
    }
}