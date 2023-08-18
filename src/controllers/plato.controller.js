import jwt from "jsonwebtoken";
import Plato from "../models/Plato.js";
import Categoria from "../models/Categoria.js";
import config from "../config";



export const createPlato = async (req, res) => {

    try {
    const  {nombre, categorias, descipcion, precio, clasificacion, img} = req.body

    const plato = new Plato({
        nombre, 
        descipcion, 
        precio, 
        clasificacion, 
        img
    });

    console.log(categorias)

    if(categorias){
        const foundCategorias = await Categoria.find({ name:  categorias.name });
        console.log(foundCategorias)
        plato.categorias = foundCategorias.map((categoria) => categoria._id);
    }

    const nuevoPlato = await plato.save();

    

    res.status(200).json({
        _id: nuevoPlato._id,
        nombre: nuevoPlato.nombre, 
        categoria: nuevoPlato.categorias, 
        descipcion: nuevoPlato.deletePlatoById, 
        precio: nuevoPlato.precio, 
        clasificacion: nuevoPlato.clasificacion, 
        img: nuevoPlato.img
    });
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