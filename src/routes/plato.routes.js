import {Router} from 'express'
import { createPlato, deletePlatoById, getPlatoByCat, getPlato} from '../controllers/plato.controller.js'
import { validatorSchema } from '../middlewares/validator.js'
import { registerPlatoSchema } from '../schemas/auth.schema.js'

const router = Router()

router.use((req, res, next) => {
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"    
    );
    next();
});

//controlador utilizandose en la ruta
router.post('/', createPlato) 

router.get('/', getPlato) 

router.get('/:cat', getPlatoByCat) 

//router.put('/:PlatoId', updatePlatoById)

router.delete('/:platoId', deletePlatoById)


export default router;