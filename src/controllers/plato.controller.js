import jwt from "jsonwebtoken";
import Plato from "../models/Plato.js";
import { SECRET } from "../config";



export const createPlato = async (req, res) => {

    try {
    const  {nombre, categoria, descipcion, precio, clasificacion, img} = req.body

    const plato = new Plato({
        nombre, 
        categoria, 
        descipcion, 
        precio, 
        clasificacion, 
        img
    });

    const nuevoPlato = await plato.save();

    const token = jwt.sign({ id: nuevoPlato._id}, SECRET, {
        expiresIn: 86400,
    })

    res.status(200).json({
        _id: nuevoPlato._id,
        nombre: nuevoPlato.nombre, 
        categoria: nuevoPlato.categoria, 
        descipcion: nuevoPlato.deletePlatoById, 
        precio: nuevoPlato.precio, 
        clasificacion: nuevoPlato.clasificacion, 
        img: nuevoPlato.img
    });
    next();
    } catch (error) {
        console.log(error.message)
    }

}
export const getPlato = async (req, res) => {
    try {
        const platos = await Plato.find();
        return res.json(platos)
    } catch (error) {
        console.error(error.message)
    }
}
export const getPlatoById = (req, res) => {
    
}
export const updatePlatoById = (req, res) => {
    
}
export const deletePlatoById = (req, res) => {
    
}