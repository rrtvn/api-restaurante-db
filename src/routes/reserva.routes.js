import { Router } from "express";
import { crearReserva, eliminarReserva, modificarReserva, obtenerReserva } from "../controllers/reserva.controller.js";
import { validatorSchema } from "../middlewares/validator.js";
import {registerReservaSchema} from '../schemas/auth.schema.js'

const router = Router();

router.post('/', validatorSchema(registerReservaSchema), crearReserva); 
router.get('/', obtenerReserva);
router.put('/:reservaId', modificarReserva); 
router.delete('/:reservaId', eliminarReserva); 

export default router;