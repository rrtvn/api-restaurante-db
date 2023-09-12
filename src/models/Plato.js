import mongoose from 'mongoose';

const platoSchema = new mongoose.Schema({

    nombre:{
        type: String
    },

    categorias: [{
        type: mongoose.Schema.Types.String,
        ref: "Categoria",
    },],
    descripcion:{
        type: String
    },
    precio:{
        type: String
    },
    clasificacion:{
        type: Number
    },
    img:{
        type: String
    },


},
{
    timestamps: true,
    versionKey: false
});

export default mongoose.model("Plato", platoSchema);