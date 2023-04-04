import {Router} from "express"
import {GetTopStudents, GetTotalUsers, GetAC_HW, GetClassProgress, GetHistogrma} from "../controllers/statistics.controller.js"

const router = Router();
//Allan
router.get('/GetTopStudents', GetTopStudents)
//Fer
router.get('/GetAssignedCompletedHW', GetAC_HW);
router.get('/GetClassProgress', GetClassProgress);

//Ram
router.get('/GetHistogrma', GetHistogrma)

//Brandon
router.get('/GetTotalUsers', GetTotalUsers)






export default router