import { Router } from 'express'
import { createUser, getUsers, getUserById, deleteUserById, updateUserById } from '../controllers/users.controller.js'
import {authJwt, verifySignup} from '../middlewares/index.js';


const router = Router();

router.post("/", [verifySignup.verifyIsUser, authJwt.verifyToken ,verifySignup.verifyExistingRole], createUser);
router.get("/", getUsers);
router.get('/:userId', getUserById);
//router.put('/:rut',  updateUserById);
//router.delete('/:userId', deleteUserById);

export default router;