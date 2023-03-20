import { pool } from "../classroom.db.js";
import { compare } from "../helper/handleBcrypt.js";
import jwt from "jsonwebtoken";
import * as dotenv from 'dotenv'
dotenv.config()

export const GetClasses = async (req, res) => {
    var Id = null;
    const token = req.headers['authorization'];
    jwt.verify(token, process.env.TOKEN_KEY, function (err, decoded) {
        Id = decoded.id;
        if (err) { console.log(err) }
    });

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

export const GetSection = async (req, res) => {
    var Id = null;
    const token = req.headers['authorization'];
    jwt.verify(token, process.env.TOKEN_KEY, function (err, decoded) {
        Id = decoded.id;
        if (err) { console.log(err) }
    });

    // try {
    //     const [rows] = await pool.query("CALL APIGetClasses (?)", [Id]);
    //     if (rows[0].length <= 0)
    //         return res.status(404).json({
    //             message: "Clases no encontradas",
    //         });
    //     res.send(rows[0]);
    // } catch (error) {
    //     return res.status(500).json({
    //         message: "Something goes wrong trying to APIGetClasses",
    //     });
    // }
};