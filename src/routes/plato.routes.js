import {Router} from 'express'
import { createPlato, getPlato} from '../controllers/plato.controller.js'

const router = Router()

//controlador utilizandose en la ruta
router.post('/', createPlato) 

router.get('/', getPlato) 

//router.get('/:PlatoId', getPlatoById) 

//router.put('/:PlatoId', updatePlatoById)

//router.delete('/:PlatoId', deletePlatoById)


export default router;