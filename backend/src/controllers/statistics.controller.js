import { pool } from "../classroom.db.js";
import { separarPorMes, separarPorMes2 } from "../helper/FuncionFechas.js"

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


export const GetHistogrma = async (req, res) => {
    try {
            const [row] = await pool.query(
            "SELECT COUNT(*) as No, class.Id, class.Title, user.Name  FROM class INNER JOIN user ON user.Id = class.Teacher_Id INNER JOIN section ON section.Class_Id = class.Id GROUP BY class.Id  ORDER BY No DESC LIMIT 3;"
            );
            /* console.log(row[0]) */

            const [class_1] = await pool.query(`CALL GetClassSections('${row[0]?.Id.toString()}')`);
            const no_1 = separarPorMes2(class_1[0], "Date")
            const [class_2] = await pool.query(`CALL GetClassSections('${row[1]?.Id.toString()}')`);
            const no_2 = separarPorMes2(class_2[0], "Date")
            const [class_3] = await pool.query(`CALL GetClassSections('${row[2]?.Id.toString()}')`);
            const no_3 = separarPorMes2(class_3[0], "Date")
            const [class_4] = await pool.query(`CALL GetClassSections('${row[3]?.Id.toString()}')`);
            const no_4 = separarPorMes2(class_4[0], "Date")
            const [class_5] = await pool.query(`CALL GetClassSections('${row[4]?.Id.toString()}')`);
            const no_5 = separarPorMes2(class_5[0], "Date")
            /* const [class_2] = await pool.query(`CALL GetClassSections("${row[1].Id}")`);
            const [class_3] = await pool.query(`CALL GetClassSections("${row[2].Id}")`);
            const [class_4] = await pool.query(`CALL GetClassSections("${row[3].Id}")`);
            const [class_5] = await pool.query(`CALL GetClassSections("${row[4].Id}")`); */
            res.status(200).json({
                tops : row,
                top1: no_1,
                top2: no_2,
                top3: no_3,
                top4: no_4,
                top5: no_5,


            });
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

export const GetClassProgress = async (req, res) => {
    try {
        const [classes] = await pool.query("CALL GetClassProgress");
      /*   console.log(classes[0]); */
        res.send(classes[0]);
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "Something goes wrong trying to GetClassProgress",
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
























