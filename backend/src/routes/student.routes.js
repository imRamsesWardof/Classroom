import {Router} from "express"
import {GetStudent, PostStudent, PutStudent, DeleteStudent} from "../controllers/student.controller.js"
import { validateToken } from "../middlewares/verifytoken.middleware.js"
const router = Router();

router.get('/Get',/* validateToken ,*/ GetStudent)
router.post('/Post', PostStudent)
router.put('/Put/:Id', PutStudent)
router.delete('/Delete/:Id', DeleteStudent)


export default router