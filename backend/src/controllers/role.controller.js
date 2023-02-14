import {pool} from "../classroom.db.js"
import { v4 as uuidv4 } from 'uuid';

export const GetRoles = async (req, res) => {

  try {
    const [rows] = await pool.query("CALL GetRoles");
    res.send(rows[0]);
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: "Something goes wrong trying to GetRoles",
    });
  }
}

export const GetRol = async (req, res) => {
  try {
    const [rows] = await pool.query("CALL GetRol (?)", [req.params.Id]);

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

export const PostRol = async (req, res) => {
  try {
    const {Nombre} = req.body;
    var IsActive = true;
    var date = new Date();
    date.toString();
    let Id = uuidv4();

    const [rows] = await pool.query("CALL PostRol( ?, ?, ?, ?)", [
      Id,
      Nombre,
      IsActive,
      date
    ]);
    res.send({
      Id: rows.insertId,
      Nombre,
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

export const PatchRol = async (req, res) => {
  try {
    const { Id } = req.params;
    const { Nombre} = req.body;
    var IsActive = true;
    var date = new Date();
    date.toString();

    const [result] = await pool.query("CALL PatchRol( ?, ?, ?, ?)", [
      Id,
      Nombre,
      IsActive,
      date,
    ]);
    

    if (result.affectedRows === 0)
      return res.status(404).json({
        message: "Rol no encontrado",
      });
    const [rows] = await pool.query("CALL GetRol (?)", [Id]);
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

export const DeleteRol = async (req, res) => {
  try {
    var IsActive = false;
    var date = new Date();
    date.toString();

    const [result] = await pool.query("CALL DeleteRol(?, ?, ?)", [
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
