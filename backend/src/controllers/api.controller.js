import { pool } from "../classroom.db.js"
import { v4 as uuidv4 } from 'uuid';
import { obtainId } from "../helper/jwtId.js";
import multer from 'multer';
import jwt from "jsonwebtoken";
import * as dotenv from 'dotenv'
dotenv.config();

export const GetClasses = async (req, res) => {
    var token = req.headers['authorization'];
    var Id = await obtainId(token);

    try {
        const [rows] = await pool.query("CALL APIGetClasses (?)", [Id]);
        if (rows[0].length <= 0)
            return res.status(404).json({
                message: "Clases no encontradas",
            });
        res.send(rows[0]);
    } catch (error) {
        return res.status(500).json({
            message: "Something goes wrong trying to APIGetClasses",
        });
    }
};

export const UploadHW = async (req, res) => {
    const token = req.headers['authorization'];
    var User_Id = await obtainId(token);

    try {
        const { Class_Id, Section_Id } = req.params;
        let Homework_Id = uuidv4();
        let File_Id = uuidv4();
        let Route = req.dirPath;
        let FileName = req.FileName;
        let IsCompleted = true;
        let Type = true;
        console.log(req.dirPath + "/" + FileName)

        const [rows] = await pool.query("CALL APIUploadHW(?, ?, ?, ?, ?, ?, ?, ?)", [
            User_Id,
            Homework_Id,
            Section_Id,
            File_Id,
            Route,
            FileName,
            IsCompleted,
            Type
        ]);
    } catch (error) {
        return res.status(500).json({
            message: "Something goes wrong trying to APIUploadHW",
        });
    }

    res.status(200).send('File uploaded successfully');
};