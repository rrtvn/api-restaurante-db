import User from '../models/User.js';
import ROLES  from '../models/Role.js'
import Categoria from '../models/Categoria.js';
import { z } from 'zod';



export const verifyIsUser = async (req, res) => {

    try {
        const email = req.body.email;
        
        
        const userFound = await User.findOne({ email : email }) //Buscasmos el usuario por correo, deberia ser por rut
        if(!userFound){
            return res.status(400).json({ message: 'Usuario no existe.'});
        }
        console.log('Usuario validado');
        return res.status(200)
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
};

export const verifyExistingCategoria = async (req, res, next) => {
    req.body.categorias.find();
    console.log(req.body)
    if (!req.body.categorias) return res.status(400).json({message: 'No categorias'});

    for (let i = 0; i < req.body.categorias.length; i++) {
        if (!Categoria.includes(req.body.categorias[i])){
            return res.status(400).json({
                message: `Categoria ${req.body.categorias[i]} no existe`
            })
        }
        
    }

  }

export const verifyExistingRole = (req, res, next) => {
    req.body.roles.find();

    if (!req.body.roles) return res.status(400).json({message: 'No roles'});

    for (let i = 0; i < req.body.roles.length; i++) {

        if(!ROLES.includes(req.body.roles[i])){
            return res.status(400).json({
                message: 'Role ${req.body.roles[i]} no existe',
            });
        }

    }
    next();
};

