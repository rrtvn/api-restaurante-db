import mongoose from "mongoose";
export const CATEGORIAS = ["Fondos", "Pizzas", "Antipasti", "Cocktail", "Bebidas", "Cafeteria", "Gnocchi"];

const categoriaSchema = new mongoose.Schema(
    {
        name: String,
    },
    {
        versionKey: false,
    }
);

export default mongoose.model("Categoria", categoriaSchema);