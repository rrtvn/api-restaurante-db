import jwt  from 'jsonwebtoken';
import Reserva from '../models/Reserva.js'
import { SECRET } from '../config.js';

export const crearReserva = async (req, res, next) => {
    try {
        const { nombre, apellido, rut, email, telefono, cantPersonas, horaReserva, fechaReserva } = req.body

        

        const reserva = new Reserva({
            nombre,
            apellido,
            rut,
            email,
            telefono : parseInt(telefono),
            cantPersonas : parseInt(cantPersonas),
            horaReserva,
            fechaReserva
        });
        console.log(reserva.telefono)

        const savedReserva = await reserva.save();

        const token = jwt.sign({ id: savedReserva._id}, SECRET, {
            expiresIn: 86400,
        });

        res.status(200).json({ 
            _id: savedReserva._id,
            nombre: savedReserva.nombre,
            apellido: savedReserva.apellido,
            rut: savedReserva.rut,
            email: savedReserva.email,
            telefono: savedReserva.telefono,
            cantPersonas: savedReserva.cantPersonas,
            horaReserva: savedReserva.horaReserva,
            fechaReserva: savedReserva.fechaReserva,
         });

         next();

    } catch (error) {
        console.error(error.message)
    }
}

export const obtenerReserva = async (req, res) => {

    try {
        const reservas = await Reserva.find();
        return res.json(reservas);
    } catch (error) {
        console.error(error.message);
    }

}
export const modificarReserva = async (req, res) => {
    const updateReserva = await Reserva.findOneAndUpdate(req.params.reservaId, req.body, {
        new: true
    })
    res.status(200).json(updateReserva);

}
export const eliminarReserva = async (req, res) => {

    const {reservaId} = req.params._id;
    await Reserva.findByIdAndDelete(reservaId);
    res.status(204).json();
}





