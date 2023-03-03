import {pool} from "../classroom.db.js"
import { v4 as uuidv4 } from 'uuid';
import { encrypt, compare } from "../helper/handleBcrypt.js";

export const GetTeacher = async (req, res) => {

  try {
    const [rows] = await pool.query("CALL GetUser('Teacher')");
    res.send(rows[0]);
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: "Something goes wrong trying to GET-USER",
    });
  }
}

export const PostTeacher = async (req, res) => {
  try {
    const {Name, Username, Password} = req.body;
    var IsActive = true;
    var date = new Date();
    date.toString();
    let Id = uuidv4();
    const passwordHash = await encrypt(Password);


    const [result] = await pool.query("SELECT Id FROM role WHERE Type = 'Teacher'");
    console.log(result);
    const Rol_Id = result[0].Id.toString();
    console.log(Rol_Id);

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
      "data" : rows,
      Id,
      Name,
      Username,
      passwordHash,
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

export const PutTeacher = async (req, res) => {
  try {
    const { Id } = req.params;
    const { Name, Username, Password} = req.body;
    var IsActive = true;
    var date = new Date();
    date.toString();

    const [result] = await pool.query("CALL PutUser( ?, ?, ?, ?, ?, ?)", [
      Id,
      Name,
      Username,
      Password,
      IsActive,
      date,
    ]);
    
    /* res.status(200).json({
      message: "Usuario actualizado",
    }); */

    if (result.affectedRows === 0)
      return res.status(404).json({
        message: "Rol no encontrado",
      });
    const [rows] = await pool.query("select * from user where Id = ?", [Id]);
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

export const DeleteTeacher = async (req, res) => {
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
