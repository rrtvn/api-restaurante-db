import {Router} from 'express'

import { signIn, signUp } from '../controllers/auth.controller.js'; 

const router = Router();

router.use((req, res, next) => {
    res.header(
        "Acceses-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
    );
        next();
});

router.get('/signup', signUp)

router.post('/signin', signIn)

export default router;