import { Router } from "express"; 
import { conection, listClasses } from '../controllers/index.controller.js'

const router = Router()

router.get('/conection', conection);


// CLASS ROUTES:
router.get('/class/get', listClasses);
router.post('/class/insert');
router.post('/class/put/:id');
router.post('/class/delete/:id');
router.post('/class/assign');

export default router