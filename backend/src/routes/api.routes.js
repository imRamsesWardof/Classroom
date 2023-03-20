import {Router} from 'express'
import {GetClasses, GetSection} from '../controllers/api.controller.js'

const router = Router();

router.get('/Classes/Get', GetClasses);
router.get('/Class/:Id/Section/Get/:Id', GetSection)

export default router