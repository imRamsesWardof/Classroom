import {Router} from 'express';
import {GetClasses, UploadHW} from '../controllers/api.controller.js';
import { setStorage } from '../middlewares/storage.middleware.js';
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';


const storage =  multer.diskStorage({
        destination: (req, file, cb) => {
            console.log(req)
            const __dirname = path.dirname(fileURLToPath(import.meta.url));
            console.log(__dirname)
            const dirPath = path.join(__dirname, '..', '..', 'files', req.params.Class_Id, req.params.Section_Id);
            console.log(dirPath);
            if (!fs.existsSync(dirPath)) {
                fs.mkdirSync(dirPath);
            }
            // var uploadedDir = dirPath;
            req.dirPath = dirPath
            cb(null, dirPath);
        },
        filename: (req, file, cb) => {
            var Id =  obtainId(req.headers.authorization.split(' ')[1]);
            const filename = Id + '-' + `${encodeURI(file.originalname)}`;
            req.FileName = filename;
            cb(null, filename);
        }
    });

const uploadStudent = multer({ storage });


const router = Router();

router.post('/Student/Class/:Class_Id/Section/:Section_Id', uploadStudent.single('file'), UploadHW);
router.get('/Classes/Get', GetClasses);

export default router