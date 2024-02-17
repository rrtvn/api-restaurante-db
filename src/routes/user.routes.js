import { Router } from 'express'
import { createUser, deleteUserById} from '../controllers/users.controller.js'
import { getUsers, getUserByToken} from '../controllers/users.controller.js'
import { getUserById} from '../controllers/users.controller.js'
import { isAdmin, verifyToken } from '../middlewares/authJwt.js';
import { verifyExistingRole } from '../middlewares/verifySignup.js';


const router = Router();
router.use((req, res, next) => {
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept, Authorization"    
    );
    next();
});

router.post("/", createUser);
router.get("/", getUsers);
router.get("/:token", verifyToken, getUserByToken);
router.get('/:userId', getUserById);
//router.put('/:rut',  updateUserById);
router.delete('/:userId', deleteUserById);

export default router;