import {Router} from 'express'

import { signInHandler, signUp } from '../controllers/auth.controller.js'; 

import { verifySignup } from '../middlewares/index.js';

const router = Router();

router.use((req, res, next) => {
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"    
    );
    next();
});

router.post('/signup', signUp);

router.post('/signin',  signInHandler);

export default router;