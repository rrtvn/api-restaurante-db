import Categoria from "../models/Categoria"


export const createCategoria = async (req, res) => {
    try {
        const {name} = req.body
        const categoria = new Categoria({
            name
        });

        const newCategoria = await categoria.save() 
        
        res.status(200).json({
            _id: newCategoria._id,
            name: newCategoria.name,

        })
    } catch (error) {
        console.error(error)
    }
}

export const getCategoria = async (req, res) => {
    try {
        const categorias = await Categoria.find();
        return res.json(categorias)
    } catch (error) {
        console.error(error.message)
    }
}