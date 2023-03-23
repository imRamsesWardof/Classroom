import { pool } from "../classroom.db.js"
import { v4 as uuidv4 } from 'uuid';
import * as dotenv from 'dotenv'
dotenv.config();

export const GetClasses = async (req, res) => {
    var Id = req.user.id;

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
    var User_Id = req.user.id;
    console.log(User_Id)
    try {
        const { Class_Id, Section_Id } = req.params;
        let Homework_Id = uuidv4();
        let File_Id = uuidv4();
        let Route = req.dirPath;
        let FileName = req.FileName;
        let IsCompleted = true;
        let Type = true;
        console.log("enter")
        console.log(req.dirPath + "/" + FileName)

        // const [rows] = await pool.query("CALL APIUploadHW(?, ?, ?, ?, ?, ?, ?, ?)", [
        // console.log(User_Id,
        // Homework_Id,
        // Section_Id,
        // File_Id,
        // Route,
        // FileName,
        // IsCompleted,
        // Type)
        // ]);
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "Something goes wrong trying to APIUploadHW",
        });
    }

    res.status(200).send('File uploaded successfully');
};

export const DeleteSection = async (req, res) => {
    var role = req.user.role;

    if (role == 'Teacher') {
        try {
            const { Section_Id } = req.params;

            const [rows] = await pool.query("CALL APIDeleteSection(?)", [ Section_Id ]);
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                message: "Something goes wrong trying to APIDeleteSection",
            });
        }
    }
    else {
        return res.status(401).json({
            message: "The user does not have access to this function",
        });
    }
    res.status(200).send('Section deleted successfully');
}

export const StudentNotifications = async (req, res) => {
    var Id = req.user.id;
    console.log(Id);
    try {
        const [rows] = await pool.query("CALL APIGetNotifications (?)", [Id]);
        if (rows[0].length <= 0)
            return res.status(404).json({
                message: "Notificaciones no encontradas",
            });
        res.send(rows[0]);
    } catch (error) {
        return res.status(500).json({
            message: "Something goes wrong trying to APIGetNotifications",
        });
    }
}