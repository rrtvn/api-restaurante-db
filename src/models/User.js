import mongoose from "mongoose";
import bcrypt from 'bcryptjs'

const userSchema = new mongoose.Schema({
    rut: {
        type: String,
        unique: true,
    },
    name: {
        type: String,
        unique: true,
    },
    lastName: {
        type: String,
        unique: true,
    },
    email: {
        type: String,
        unique: true,
    },
    phone: {
        type: Number,
        unique: true,
    },
    password: {
        type: String,
        unique: true,
    },
    roles: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role",
    },], 
}, {
    timestamps: true,
    versionKey: false
})

userSchema.statics.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10); //genSalt es una manera de aplicar una algoritmo '10' veces que se ejecuta el algoritmo
    return await bcrypt.hash(password, salt); // se crea contraseña cifrada
}

userSchema.statics.comparePassword = async (password, recivedPassword) => {
    return await bcrypt.compare(password, recivedPassword); //recive contraseña y la compra con la contraseñ ingresada
}

export default mongoose.model("User", userSchema);