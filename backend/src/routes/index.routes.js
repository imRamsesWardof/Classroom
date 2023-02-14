import { Router } from "express"; 
import { ping } from '../controllers/index.controller.js'

const router = Router()

router.get('/ping', ping);


// CLASS ROUTES:
router.get('/class/get');
router.post('/class/insert');
router.post('/class/put/:id');
router.post('/class/delete/:id');
router.post('/class/assign');

export default router