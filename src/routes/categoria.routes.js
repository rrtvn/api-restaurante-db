import { Router } from 'express';
import { createCategoria
    , getCategoria
    , deleteCategoriaById } from '../controllers/categoria.controller.js';
import { verifyExistingCategoria } from '../middlewares/verifySignup.js';

const router = Router();

router.post('/', createCategoria);
router.get('/', getCategoria);
router.delete('/:categoriaId' , deleteCategoriaById);


export default router;