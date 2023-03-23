import multer from 'multer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

export const setStorage = () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    multer.diskStorage({
        destination: (req, file, cb) => {
            const dirPath = path.join(__dirname, '..', '..', 'files', req.params.Class_Id, req.params.Section_Id);
            if (!fs.existsSync(dirPath)) {
                fs.mkdirSync(dirPath);
            }
            // var uploadedDir = dirPath;
            req.dirPath = dirPath
            cb(null, dirPath);
        },
        filename: (req, file, cb) => {
            var Id = obtainId(req.headers.authorization.split(' ')[1]);
            const filename = Id + '-' + `${encodeURI(file.originalname)}`;
            req.FileName = filename;
            cb(null, filename);
        }
    });
    return;
}