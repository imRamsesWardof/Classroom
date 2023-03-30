import {Router} from "express"
import {GetTopStudents, GetTotalUsers} from "../controllers/statistics.controller.js"

const router = Router();
//Allan
router.get('/GetTopStudents', GetTopStudents)
//Fer

//Ram

//Brandon
router.get('/GetTotalUsers', GetTotalUsers)






export default router