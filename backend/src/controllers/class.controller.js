import { pool } from "../classroom.db.js"
import { v4 as uuidv4 } from 'uuid';

export const GetClasses = async (req, res) => {
  try {
    const [rows] = await pool.query("CALL GetClasses");
    res.send(rows);
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: "Something goes wrong trying to GetClass",
    });
  }
}

export const GetClass = async (req, res) => {
  try {
    const [rows] = await pool.query("CALL GetClass (?)", [req.params.Id]);

    if (rows[0].length <= 0)
      return res.status(404).json({
        message: "Rol no encontrado",
      });
    res.send(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

export const PostClass = async (req, res) => {
  try {
    const { Title, Description, User_Id, StartDate, EndDate } = req.body;
    let Id = uuidv4();

    const [rows] = await pool.query("CALL PostClass(?, ?, ?, ?, ?, ?)", [
      Id,
      Title,
      Description,
      User_Id,
      StartDate,
      EndDate
    ]);
    res.send({
      Id: rows.insertId,
      Title
    });
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

export const PutClass = async (req, res) => {
  try {
    const { Id } = req.params;
    const { Title, Description, User_Id, StartDate, EndDate } = req.body;
    var IsActive = true;
    var date = new Date();
    date.toString();

    const [result] = await pool.query("CALL PutClass(?, ?, ?, ?, ?, ?, ?, ?)", [
      Id,
      Title,
      Description,
      User_Id,
      StartDate,
      EndDate,
      IsActive,
      date
    ]);

    if (result.affectedRows === 0)
      return res.status(404).json({
        message: "Clase no encontrada",
      });
    const [rows] = await pool.query("CALL GetClass (?)", [Id]);
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

export const DeleteClass = async (req, res) => {
  try {
    var IsActive = false;
    var date = new Date();
    date.toString();

    const [result] = await pool.query("CALL DeleteClass(?, ?, ?)", [
      req.params.Id,
      IsActive,
      date,
    ]);
    if (result.affectedRows <= 0)
      return res.status(404).json({
        message: "Clase no encontrada",
      });
    res.sendStatus(204);
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

export const AssignClass = async (req, res) => {
  try {
    var values = req.body;  // It supposed to be an array of StudentsID

    await values.forEach(element => {
      let Id = uuidv4();
      const [result] = pool.query("CALL AssignClass(?, ?, ?)", [
        Id,
        element,
        req.params.Id
      ]);
      if (result.affectedRows <= 0)
        return res.status(404).json({
          message: "Clase no encontrada",
        });
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

export const GetDetails = async (req, res) => {

  try {
    const [rows] = await pool.query("CALL GetClassDetails(?)",[req.params.Id]);
    res.send(rows[0]);
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: "Something goes wrong trying to GetDetais",
    });
  }
}
