import jwt  from 'jsonwebtoken';
import Reserva from '../models/Reserva.js'
import { SECRET } from '../config.js';

export const crearReserva = async (req, res, next) => {
    try {
        const { fullName, rut, email, telefono, cantPersonas, selectedHora, date } = req.body

        const hrReserva = selectedHora.name
 
        const reserva = new Reserva({
            fullName,
            rut,
            email,
            telefono : parseInt(telefono),
            cantPersonas : parseInt(cantPersonas),
            horaReserva : String(hrReserva),
            fechaReserva : Date(date)
        });
        console.log(hrReserva)
        console.log(date)

        const savedReserva = await reserva.save();

        const token = jwt.sign({ id: savedReserva._id}, SECRET, {
            expiresIn: 86400,
        });

        res.status(200).json({ 
            _id: savedReserva._id,
            fullName: savedReserva.fullName,
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
export const deleteReservaById = async (req, res) => {

    try {
        const {reservaId} = req.params;
        if (!reservaId) return res.json({message: 'Reserva Id es requerido'})
        const findReser = await Reserva.findByIdAndDelete(reservaId);
        res.json({
            data: findReser,
        })
        
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Server error'})
    }
}





