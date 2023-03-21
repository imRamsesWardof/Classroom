import {Router} from 'express'
import { PostSection, PutSection } from '../controllers/section.controller.js'
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

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
      const filename = `${encodeURI(file.originalname)}`;

      cb(null, filename);
    }
  });

const uploadTeacher = multer({ storage: storageTeacher })

router.post('/API/Class/:Class_Id/Section/Post', uploadTeacher.array('files', 5), PostSection)
router.post('/API/Class/:Class_Id/Section/Put/:Section_Id', uploadTeacher.array('files', 5), PutSection)



export default router