import {Router} from "express"
import {GetStudent, PostStudent, PutStudent, DeleteStudent} from "../controllers/student.controller.js"

const router = Router();

router.get('/Get', GetStudent)
router.post('/Post', PostStudent)
router.put('/Put/:Id', PutStudent)
router.delete('/Delete/:Id', DeleteStudent)


export default router