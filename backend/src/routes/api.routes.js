import {Router} from 'express';
import {GetClasses, UploadHW, DeleteSection, StudentNotifications} from '../controllers/api.controller.js';
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const storageStudent =  multer.diskStorage({
        destination: (req, file, cb) => {
            const classPath = path.join(__dirname, '..', '..', '..', 'files', req.params.Class_Id);
            const dirPath = path.join(classPath, req.params.Section_Id)
            if (!fs.existsSync(classPath)) {
                fs.mkdirSync(classPath);
            }
            if (!fs.existsSync(dirPath)) {
                fs.mkdirSync(dirPath);
            }
            // var uploadedDir = dirPath;
            req.dirPath = dirPath
            console.log("Hola")
            console.log(dirPath)
            cb(null, dirPath);
        },
        filename: (req, file, cb) => {
            var Id =  req.user.id;
            const filename = Id + '-' + `${Buffer.from(file.originalname, 'latin1').toString('utf8',)}`;
            req.FileName = filename;
            console.log(filename)
            cb(null, filename);
        }
    });

const uploadStudent = multer({ storage: storageStudent });


const router = Router();

router.post('/Student/Class/:Class_Id/Section/:Section_Id', uploadStudent.single('file'), UploadHW);
router.get('/Student/HW', StudentNotifications);
router.post('/Class/:Class_Id/Section/:Section_Id/Delete', DeleteSection);
router.get('/Classes/Get', GetClasses);


export default router