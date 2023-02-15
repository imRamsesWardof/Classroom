import {pool} from "../classroom.db.js"
import { v4 as uuidv4 } from 'uuid';

export const GetRole = async (req, res) => {
  try {
    const [rows] = await pool.query("CALL GetRole");
    res.send(rows[0]);
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: "Something goes wrong trying to GetRole",
    });
  }
}


export const PostRole = async (req, res) => {
  try {
    const {Type} = req.body;
    var IsActive = true;
    var date = new Date();
    date.toString();
    let Id = uuidv4();

    const [rows] = await pool.query("CALL PostRole( ?, ?, ?, ?)", [
      Id,
      Type,
      IsActive,
      date
    ]);
    res.send({
      Id: rows.insertId,
      Type,
      IsActive,
      date
    });
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

export const PutRole = async (req, res) => {
  try {
    const { Id } = req.params;
    const { Type} = req.body;
    var IsActive = true;
    var date = new Date();
    date.toString();

    const [result] = await pool.query("CALL PutRole( ?, ?, ?, ?)", [
      Id,
      Type,
      IsActive,
      date,
    ]);
    

   /*  if (result.affectedRows === 0)
      return res.status(404).json({
        message: "Rol no encontrado",
      });
    const [rows] = await pool.query("CALL GetRol (?)", [Id]); */
    res.status(200).json({
      message: "Role actualizado",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

export const DeleteRole = async (req, res) => {
  try {
    var IsActive = false;
    var date = new Date();
    date.toString();

    const [result] = await pool.query("CALL DeleteRole(?, ?, ?)", [
      req.params.Id,
      IsActive,
      date,
    ]);
    if (result.affectedRows <= 0)
      return res.status(404).json({
        message: "Rol no encontrado",
      });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};
