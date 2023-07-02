import jwt from 'jsonwebtoken'
import User from '../models/User'
import Role from '../models/Role.js'
import { SECRET } from '../config'

export const signUp = async (req, res) => {

    try {
        const { rut, email, password, roles } = req.body;

        // creacion de un nuevo Usuario
        const newUserAuth = new User({
            rut,
            email,
            password,
        });

        // revisamos los roles
        if (roles) {
            const foundRoles = await Role.find({ $in: roles });
            newUserAuth.roles = foundRoles.map((role) => role._id);
        } else {
            const role = await Role.findOne({ name: "user" });
            newUserAuth.roles = [role._id];
        }

        //guradamos el User Object en Mongodb
        const savedUserAuth = await newUserAuth.save();
        console.log(savedUserAuth);

        //creamos un token
        const token = jwt.sign({ id: savedUserAuth._id }, SECRET, {
            expiresIn: 86400, //24 horas en segundos
        });

        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json(error.message);
    }

}

export const signIn = async (req, res) => {
    res.json('signin')
}