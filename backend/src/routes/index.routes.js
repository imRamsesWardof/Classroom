import { Router } from "express"; 
import { ping } from '../controllers/index.controller.js';
import classRoutes from "./class.routes.js"
import studentRoutes from "./student.routes.js";
import teacherRoutes from "./teacher.routes.js";
import roleRoutes from "./role.routes.js";
import loginRoutes from "./autho.routes.js";
import sectionRoutes from "./section.routes.js";
import fileRoutes from "./file.routes.js";
import apiRoutes from "./api.routes.js";
import statisticsRoutes from "./statistics.routes.js";
import { validateToken } from "../middlewares/verifytoken.middleware.js"

const router = Router();

router.use(loginRoutes);
router.use('/Class', classRoutes);
router.use('/Student', studentRoutes);
router.use('/Teacher', teacherRoutes);
router.use('/Role', roleRoutes);
router.use(validateToken, sectionRoutes);
router.use(fileRoutes);
router.use('/API', validateToken, apiRoutes);
router.use('/Mobile', validateToken, statisticsRoutes);
router.get('/ping', ping);

export default router