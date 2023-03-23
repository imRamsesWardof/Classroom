import {Router} from "express"
import {GetFile, DeleteFile} from "../controllers/file.controller.js"

const router = Router();

router.get('/API/File/Get/:Id', GetFile)
router.delete('/API/File/Delete/:Id', DeleteFile)

export default router