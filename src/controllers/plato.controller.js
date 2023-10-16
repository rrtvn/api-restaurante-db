import jwt from "jsonwebtoken";
import Plato from "../models/Plato.js";
import Categoria from "../models/Categoria.js";
import config from "../config";



export const createPlato = async (req, res) => {

    try {
        const { nombre, descripcion, precio, selectedCategoria, rating, image } = req.body
        console.log(selectedCategoria)
        const categoria = selectedCategoria.name;

        //NOS ASEGURAMOS QUE LA IMAGEN SE GUARDE EN LA BD 
        //SIN EL C://FAKEPATH//
        const pathImg = image.replace(/^.*\\/,"");

        const plato = new Plato({
            nombre,
            descripcion,
            precio,
            clasificacion: String(rating),
            img: String(pathImg),
        });

        console.log(categoria)

        if (categoria) {
            const foundCategorias = await Categoria.find({ name: categoria });
            console.log(foundCategorias)
            plato.categorias = foundCategorias.map((cat) => String(cat.name));
        }

        const nuevoPlato = await plato.save();



        res.status(200).json({
            _id: nuevoPlato._id,
            nombre: nuevoPlato.nombre,
            categorias: nuevoPlato.categorias,
            descripcion: nuevoPlato.descripcion,
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
export const getPlatoByCat = async (req, res) => {
    try {
        const catName = req.params.cat;
        if(!catName) return res.json({message: 'Nombre de categoria es requerido'})
        const findPlatoByCat =  await Plato.find({categorias: catName})
        console.log(findPlatoByCat)
        res.json({
            data: findPlatoByCat,
        })
        next();
    } catch (error) {
        console.error(error.message)
    }
}
export const updatePlatoById = (req, res) => {

}
export const deletePlatoById = async (req, res) => {

    try {
        const { platoId } = req.params;
        if (!platoId) return res.json({ message: 'Plato ID es requerido' });
        const findPlato = await Plato.findByIdAndDelete(platoId);
        res.json({
            data: findPlato,
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Server error'})
    }

}