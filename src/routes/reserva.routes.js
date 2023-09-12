import { Router } from "express";
import { crearReserva, deleteReservaById, modificarReserva, obtenerReserva } from "../controllers/reserva.controller.js";
import { validatorSchema } from "../middlewares/validator.js";
import {registerReservaSchema} from '../schemas/auth.schema.js'

const router = Router();

router.use((req, res, next) => {
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"    
    );
    next();
});

router.post('/',  crearReserva); 
router.get('/', obtenerReserva);
router.put('/:reservaId', modificarReserva); 
router.delete('/:reservaId', deleteReservaById); 

export default router;