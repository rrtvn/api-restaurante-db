import {Router} from 'express'

import { signInHandler} from '../controllers/auth.controller.js'; 
import { verifyIsUser } from '../middlewares/verifySignup.js';
import {validatorSchema} from '../middlewares/validator.js'
import { loginSchema } from '../schemas/auth.schema.js'

const router = Router();

router.use((req, res, next) => {
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"    
    );
    next();
});



router.post('/signin', [validatorSchema(loginSchema), verifyIsUser],  signInHandler);

export default router;