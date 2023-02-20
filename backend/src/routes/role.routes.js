import {Router} from "express"
import {GetRole, PostRole, PutRole, DeleteRole} from "../controllers/role.controller.js"

const router = Router();

router.get('/Get', GetRole)
router.post('/Post', PostRole)
router.put('/Put/:Id', PutRole)
router.delete('/Delete/:Id', DeleteRole)


export default router