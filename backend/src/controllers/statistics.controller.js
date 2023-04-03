import { pool } from "../classroom.db.js";

//Allan
export const GetTopStudents = async (req, res) => {
    try {
        const [students] = await pool.query("CALL Top5Students");
        res.send(students[0]);
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "Something goes wrong trying to GetTopStudents",
        });
    }
}

//Fer
export const GetAC_HW = async (req, res) => {
    try {
        const [classes] = await pool.query("CALL GetAC_HW");
        res.send(classes[0]);
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "Something goes wrong trying to GetAC_HW",
        });
    }
}





















//Ramses






















//Brandon

export const GetTotalUsers = async (req, res) => {
    try {
        const [roles] = await pool.query("CALL GetTotalUser");
        res.send(roles[0]);
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "Something goes wrong trying to GetTotalUsers",
        });
    }
}
























