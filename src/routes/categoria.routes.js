import { Router } from 'express';
import { createCategoria
    , getCategoria } from '../controllers/categoria.controller.js';

const router = Router();

router.post('/', createCategoria);
router.get('/', getCategoria);


export default router;