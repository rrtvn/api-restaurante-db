import mongoose from 'mongoose';

const platoSchema = new mongoose.Schema({

    nombre:{
        type: String
    },

    categorias: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Categoria",
    },],
    descripcion:{
        type: String
    },
    precio:{
        type: Number
    },
    clasificacion:{
        type: String
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