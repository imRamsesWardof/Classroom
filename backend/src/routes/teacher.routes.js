import {Router} from "express"
import {GetTeacher, PostTeacher, PutTeacher, DeleteTeacher} from "../controllers/teacher.controller.js"

const router = Router();

router.get('/Get', GetTeacher)
router.post('/Post', PostTeacher)
router.put('/Put/:Id', PutTeacher)
router.delete('/Delete/:Id', DeleteTeacher)


export default router