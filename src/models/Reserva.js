import mongoose from "mongoose";

const reservaSchema = new mongoose.Schema({

    fullName:{
        type: String,
    },
    rut:{
        type: String,
    },
    email:{
        type: String,
    },
    telefono:{
        type: Number,
    },
    cantPersonas:{
        type: Number,
    },
    horaReserva:{
        type: String,
    },
    fechaReserva:{
        type: String,
        
    },

},
{
    timestamps: true,
    versionKey: false
});

export default mongoose.model("Reserva", reservaSchema);