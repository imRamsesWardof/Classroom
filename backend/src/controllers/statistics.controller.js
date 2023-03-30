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






















//Ramses






















//Brandon


























