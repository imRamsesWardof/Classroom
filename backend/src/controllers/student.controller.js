import {pool} from "../classroom.db.js"
import { v4 as uuidv4 } from 'uuid';

export const GetStudent = async (req, res) => {

  try {
    const [rows] = await pool.query("CALL GetUser (?)", ['dc3c2a78-abe4-11ed-82cc-ace2d36b47fa']);
    res.send(rows[0]);
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: "Something goes wrong trying to GET-USER",
    });
  }
}

export const PostStudent = async (req, res) => {
  try {
    const {Name, Username, Password, Rol_Id} = req.body;
    var IsActive = true;
    var date = new Date();
    date.toString();
    let Id = uuidv4();

    const [rows] = await pool.query("CALL PostUser( ?, ? , ?, ?, ?, ?, ?)", [
      Id,
      Name,
      Username,
      Password,
      Rol_Id,
      IsActive,
      date
    ]);
    res.send({
      Id: rows.insertId,
      Name,
      Username,
      Password,
      Rol_Id,
      IsActive,
      date
    });
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: "Something goes wrong trying to POSTUSER",
    });
  }
};

export const PutStudent = async (req, res) => {
  try {
    const { Id } = req.params;
    const { Name, Username, Password, Rol_Id} = req.body;
    var IsActive = true;
    var date = new Date();
    date.toString();

    const [result] = await pool.query("CALL PutUser( ?, ?, ?, ?, ?, ?, ?)", [
      Id,
      Name,
      Username,
      Password,
      Rol_Id,
      IsActive,
      date,
    ]);
    
    res.status(200).json({
      message: "Usuario actualizado",
    });

    /* if (result.affectedRows === 0)
      return res.status(404).json({
        message: "Rol no encontrado",
      });
    const [rows] = await pool.query("CALL GetRol (?)", [Id]);
    res.json(rows[0]); */
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

export const DeleteStudent = async (req, res) => {
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
      res.status(200).json({
        message: "Eliminado correctamente",
      });;
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong trying to DELETE",
    });
  }
};
