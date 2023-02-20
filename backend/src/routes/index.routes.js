import { Router } from "express"; 
import { ping } from '../controllers/index.controller.js';
import classRoutes from "./class.routes.js"

const router = Router();

router.get('/ping', ping);
router.use('/Class', classRoutes);

export default router