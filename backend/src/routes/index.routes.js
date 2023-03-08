import { Router } from "express"; 
import { ping } from '../controllers/index.controller.js';
import classRoutes from "./class.routes.js"
import studentRoutes from "./student.routes.js";
import teacherRoutes from "./teacher.routes.js";
import roleRoutes from "./role.routes.js";
import loginRoutes from "./autho.routes.js";

const router = Router();

router.use(loginRoutes);
router.use('/Class', classRoutes);
router.use('/Student',studentRoutes);
router.use('/Teacher',teacherRoutes);
router.use('/Role',roleRoutes);
router.get('/ping', ping);

export default router