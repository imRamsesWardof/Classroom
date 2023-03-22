import {Router} from 'express'
import { PostSection, PutSection, GetAllSections, GetSectionData } from '../controllers/section.controller.js'
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { validateToken } from "../middlewares/verifytoken.middleware.js"

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const router = Router()

let uploadedDir;
const storageTeacher = multer.diskStorage({
    destination: (req, file, cb) => {
      const dirPath = path.join(__dirname, '..', '..', '..', 'files', req.params.Class_Id);
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath);
      }
      uploadedDir = dirPath;
      req.dirPath = dirPath
      cb(null, dirPath);
    },
    filename: (req, file, cb) => {
      const filename = Buffer.from(file.originalname, 'latin1').toString('utf8',);

      cb(null, filename);
    }
  });

const uploadTeacher = multer({ storage: storageTeacher })

router.get('/API/Class/:Class_Id', validateToken, GetAllSections)
router.post('/API/Class/:Class_Id/Section/Post', validateToken, uploadTeacher.array('files', 5), PostSection)
router.get('/API/Class/:Class_Id/Section/:Section_Id', validateToken, GetSectionData)
router.post('/API/Class/:Class_Id/Section/Put/:Section_Id', validateToken, uploadTeacher.array('files', 5), PutSection)




export default router