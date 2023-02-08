import { Router } from "express"; 
import { conection } from '../controllers/index.controller.js'

const router = Router()

router.get('/conection', conection);

export default router