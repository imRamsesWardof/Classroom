import {Router} from "express"
import {GetStudent, PostStudent, PutStudent, DeleteStudent} from "../controllers/student.controller.js"
import { validateToken } from "../middlewares/verifytoken.middleware.js"
const router = Router();

router.get('/Get', validateToken, GetStudent)
router.post('/Post', validateToken, PostStudent)
router.put('/Put/:Id', validateToken, PutStudent)
router.delete('/Delete/:Id', validateToken, DeleteStudent)


export default router