import jwt from 'jsonwebtoken'
import User from '../models/User'
import Role from '../models/Role.js'
import { SECRET } from '../config'
import { isAdmin } from '../middlewares/authJwt'
import { verifyIsUser } from '../middlewares/verifySignup'



export const signInHandler = async (req, res, next) => {


    try {

        verifyIsUser(req, res)

        const { email, password } = req.body;

        const user = await User.findOne({email: email });

        if (!user) {
            return res.status(401).json({
                token: null,
                message: "User not found"
            });
        }

        const recivedPassword = user.password;

        const validarPassword = await User.comparePassword(
            password,
            recivedPassword
        );

        if (!validarPassword) {
            return res.status(401).json({
                token: null,
                message: "Invalid Password"
            })

        }
        const token = jwt.sign({ id: user._id }, SECRET, {
            expiresIn: 86400, // 24 hours
        });
        console.log(token);
        res.json({ token, user });
        // next({token});

    } catch (error) {
        console.log(error.message)
    }
}