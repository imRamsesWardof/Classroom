import {Router} from "express"
import {GetStudent, PostStudent, PatchStudent, DeleteStudent} from "../controllers/rol.controller.js"

const router = Router();

router.get('/Student/Get', GetStudent)
router.post('/Student/Post', PostStudent)
router.patch('/Student/Put/:Id', PatchStudent)
router.delete('/Student/Delete/:Id', DeleteStudent)

router.get('/Teacher/Get', GetTeacher)
router.post('/Teacher/Post', PostTeacher)
router.patch('/Teacher/Put/:Id', PatchTeacher)
router.delete('/Teacher/Delete/:Id', DeleteTeacher)

export default router