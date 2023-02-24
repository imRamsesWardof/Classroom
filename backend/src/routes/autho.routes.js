import {Router} from 'express'
import { LogIn, Register, Reset} from '../controllers/autho.controller.js'

const router = Router()

router.post('/login', LogIn)
router.post('/register',  Register)
router.put('/password_reset', Reset)

export default router