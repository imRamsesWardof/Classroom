import {Router} from 'express'
import { PostSection, PutSection, GetAllSections, GetSectionData } from '../controllers/section.controller.js'
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { validateToken } from "../middlewares/verifytoken.middleware.js"
import { v4 as uuidv4 } from 'uuid';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const router = Router()
// http://localhost:4000/API/Class/9f55be9f-5ee1-4ae8-aabd-185850577ea5/Section/Post
let uploadedDir;
const storageTeacher = multer.diskStorage({
    destination: (req, file, cb) => {
      const classPath = path.join(__dirname, '..', '..', '..', 'files', req.params.Class_Id);
      if (!fs.existsSync(classPath)) {
        fs.mkdirSync(classPath);
      }
      const dirPath = path.join(classPath, req.Id)
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath);
      }
      uploadedDir = dirPath;
      req.dirPath = dirPath;
      cb(null, dirPath);
    },
    filename: (req, file, cb) => {
      const filename = Buffer.from(file.originalname, 'latin1').toString('utf8',);
      cb(null, filename);
    }
  });

const uploadTeacher = multer({ storage: storageTeacher })

router.get('/API/Class/:Class_Id', validateToken, GetAllSections)
router.post('/API/Class/:Class_Id/Section/Post', validateToken,(req, res, next) => {
  req.Id = uuidv4();
  next();
}, uploadTeacher.array('files', 5), PostSection)
router.get('/API/Class/:Class_Id/Section/:Section_Id', validateToken, GetSectionData)
router.post('/API/Class/:Class_Id/Section/Put/:Section_Id', validateToken, uploadTeacher.array('files', 5), PutSection)




export default router