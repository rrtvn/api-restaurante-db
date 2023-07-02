import { Router } from 'express'
import { createUser, getUsers } from '../controllers/users.controller.js'

const router = Router();

router.post("/", createUser);
router.get("/", getUsers);
//router.get('/:userId', getUserById)
//router.put('/:userId', updateUserById)
//router.delete('/:userId', deleteUserById)

export default router;