import {pool} from "../classroom.db.js"
import { v4 as uuidv4 } from 'uuid';

export const GetStudent = async (req, res) => {

  try {
    const [rows] = await pool.query("CALL GetUser('Student')");
    console.log(rows);
    res.send(rows[0]);
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: "Something goes wrong trying to GET-USER-STUDENT",
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

    const [result] = await pool.query("SELECT Id FROM role WHERE Type = 'Student'");
    console.log(result);
    const Rol_Id = result[0].Id.toString();
    console.log(Rol_Id);

    const [rows] = await pool.query("CALL PostUser(?, ?, ?, ?, ?, ?, ?)", [
      Id,
      Name,
      Username,
      Password,
      Rol_Id,
      IsActive,
      date
    ]);
    res.send({
      "data" : rows,
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
      message: "Something goes wrong trying to POSTUSER",
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

    const [result] = await pool.query("CALL PutUser( ?, ?, ?, ?, ?, ?)", [
      Id,
      Name,
      Username,
      Password,
      IsActive,
      date,
    ]);
    
   /*  res.status(200).json({
      message: "Usuario actualizado",
    }); */

    if (result.affectedRows === 0)
      return res.status(404).json({
        message: "Usuario no encontrado",
      });
    const [rows] = await pool.query("Select * from user where Id = ?", [Id]);
    res.json(rows[0]);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something goes wrong trying to PUT-USER-STUDENT ",
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
      message: "Something goes wrong trying to DELETE",
    });
  }
};
