import {Router} from 'express'
import { LoginWeb, LoginMobile} from '../controllers/autho.controller.js'

const router = Router()

router.post('/LoginWeb', LoginWeb)
router.post('/LoginMobile', LoginMobile)


export default router