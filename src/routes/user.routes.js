import { Router } from 'express'
import { createUser, deleteUserById} from '../controllers/users.controller.js'
import { getUsers} from '../controllers/users.controller.js'
import { getUserById} from '../controllers/users.controller.js'
import { isAdmin, verifyToken } from '../middlewares/authJwt.js';
import { verifyExistingRole } from '../middlewares/verifySignup.js';


const router = Router();

router.post("/", createUser);
router.get("/", getUsers);
router.get('/:userId', getUserById);
//router.put('/:rut',  updateUserById);
router.delete('/:userId', deleteUserById);

export default router;