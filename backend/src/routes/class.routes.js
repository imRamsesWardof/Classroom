import {Router} from "express"
import {GetClasses, GetClass, PostClass, PutClass, DeleteClass, AssignClass, GetDetails} from "../controllers/class.controller.js"

const router = Router();

router.get('/Get', GetClasses);
router.get('/Get/:Id', GetClass);
router.post('/Post', PostClass);
router.post('/Put/:Id', PutClass);
router.post('/Delete/:Id', DeleteClass);
router.post('/Assign/:Id', AssignClass);
router.get('/Details/:Id', GetDetails)

export default router