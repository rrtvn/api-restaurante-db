import Categoria from "../models/Categoria"


export const createCategoria = async (req, res) => {
    try {
        const { name } = req.body
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

export const deleteCategoriaById = async (req, res) => {
    try {
        const { categoriaId } = req.params;
        if (!categoriaId) return res.json({ message: 'Categoria ID es requerido' })
        const findCat = await Categoria.findByIdAndDelete(categoriaId);
        res.json({
            data: findCat,
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Server error' })
    }

}
