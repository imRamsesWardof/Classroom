import {Router} from "express"
import {GetTopStudents, GetTotalUsers, GetHistogrma} from "../controllers/statistics.controller.js"

const router = Router();
//Allan
router.get('/GetTopStudents', GetTopStudents)
//Fer

//Ram
router.get('/GetHistogrma', GetHistogrma)

//Brandon
router.get('/GetTotalUsers', GetTotalUsers)






export default router