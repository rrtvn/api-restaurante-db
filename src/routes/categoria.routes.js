import { Router } from 'express';
import { createCategoria
    , getCategoria
    , deleteCategoria } from '../controllers/categoria.controller.js';
import { verifyExistingCategoria } from '../middlewares/verifySignup.js';

const router = Router();

router.post('/', createCategoria);
router.get('/', getCategoria);
router.delete('/:categoriaId' , deleteCategoria);


export default router;