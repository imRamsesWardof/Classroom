import {Router} from "express"
import {GetTopStudents, GetTotalUsers, GetAC_HW, GetClassProgress} from "../controllers/statistics.controller.js"

const router = Router();
//Allan
router.get('/GetTopStudents', GetTopStudents)
//Fer
router.get('/GetAssignedCompletedHW', GetAC_HW);
router.get('/GetClassProgress', GetClassProgress);

//Ram

//Brandon
router.get('/GetTotalUsers', GetTotalUsers)






export default router