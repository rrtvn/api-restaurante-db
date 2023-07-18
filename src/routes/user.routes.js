import { Router } from 'express'
import { createUser, getUsers, getUserById } from '../controllers/users.controller.js'
import { verifyExistingRole, verifyIsUser } from '../middlewares/verifySignup.js';


const router = Router();

router.post("/", [verifyIsUser, verifyExistingRole], createUser);
router.get("/", getUsers);
router.get('/:userId', getUserById);
//router.put('/:userId', updateUserById)
//router.delete('/:userId', deleteUserById)

export default router;