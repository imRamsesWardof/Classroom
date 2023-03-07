import {pool} from "../classroom.db.js"
import { v4 as uuidv4 } from 'uuid';
import { encrypt } from "../helper/handleBcrypt.js";

export const GetStudent = async (req, res) => {

  try {
    const [rows] = await pool.query("CALL GetUser('Student')");
    res.send(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong trying to GetStudent",
    });
  }
}

export const PostStudent = async (req, res) => {
  try {
    const {Name, Username, Password} = req.body;
    var IsActive = true;
    var date = new Date();
    date.toString();
    let Id = uuidv4();
    const passwordHash = await encrypt(Password);

    const [result] = await pool.query("SELECT Id FROM role WHERE Type = 'Student'");
    const Rol_Id = result[0].Id.toString();

    const [rows] = await pool.query("CALL PostUser(?, ?, ?, ?, ?, ?, ?)", [
      Id,
      Name,
      Username,
      passwordHash,
      Rol_Id,
      IsActive,
      date
    ]);
    res.send({
      Id,
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
      message: "Something goes wrong trying to PostUser",
    });
  }
};

export const PutStudent = async (req, res) => {
  try {
    const { Id } = req.params;
    const { Name, Username, Password} = req.body;
    var IsActive = true;
    var date = new Date();
    date.toString();

    const passwordHash = await encrypt(Password);

    const [result] = await pool.query("CALL PutUser( ?, ?, ?, ?, ?, ?)", [
      Id,
      Name,
      Username,
      passwordHash,
      IsActive,
      date,
    ]);
    
    if (result.affectedRows === 0)
      return res.status(404).json({
        message: "Usuario no encontrado",
      });
    const [rows] = await pool.query("Select * from user where Id = ?", [Id]);
    res.json(rows[0]);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something goes wrong trying to PostStudent",
    });
  }
};

export const DeleteStudent = async (req, res) => {
  try {
    var IsActive = false;
    var date = new Date();
    date.toString();

    const [result] = await pool.query("CALL DeleteUser(?, ?, ?)", [
      req.params.Id,
      IsActive,
      date,
    ]);
    if (result.affectedRows <= 0)
      return res.status(404).json({
        message: "Usuario no encontrado",
      });
      res.status(200).json({
        message: "Eliminado correctamente",
      });;
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Something goes wrong trying to DeleteStudent",
    });
  }
};
