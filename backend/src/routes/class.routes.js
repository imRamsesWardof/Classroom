import {Router} from "express"
import {GetDetails} from "../controllers/class.controller.js"

const router = Router();

router.get('/Details/:Id', GetDetails)



export default router