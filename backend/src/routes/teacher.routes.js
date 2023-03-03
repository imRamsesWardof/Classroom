import {Router} from "express"
import {GetTeacher, PostTeacher, PutTeacher, DeleteTeacher} from "../controllers/teacher.controller.js"
import { validateToken } from "../middlewares/verifytoken.middleware.js"

const router = Router();

router.get('/Get',validateToken , GetTeacher)
router.post('/Post', PostTeacher)
router.put('/Put/:Id', PutTeacher)
router.delete('/Delete/:Id', DeleteTeacher)


export default router