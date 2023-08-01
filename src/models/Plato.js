import mongoose from 'mongoose';

const platoSchema = new mongoose.Schema({

    nombre:{
        type: String
    },
    categoria:{
        type: String
    },
    descripcion:{
        type: String
    },
    precio:{
        type: Number
    },
    calsificacion:{
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