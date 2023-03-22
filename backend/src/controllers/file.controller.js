import { pool } from "../classroom.db.js"
import fs from 'fs'
import path from 'path'

export const GetFile = async (req, res) => {
  try {
    const id = req.params.Id
    const [rows] = await pool.query("CALL GetFile(?)", [id])
    const route = rows[0][0].Route
    const filename = rows[0][0].FileName
    res.download(path.join(route, filename))
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: "Something goes wrong trying to GetFile",
    });
  }
}

export const DeleteFile = async (req, res) => {
  try {
    const id = req.params.Id
    const [files] = await pool.query("CALL GetFile(?)", [id])
    const route = files[0][0].Route
    const filename = files[0][0].FileName
    const [rows] = await pool.query("CALL DeleteFile(?)", [id]) 
    fs.unlinkSync(path.join(route, filename));
    res.send({message: "Success"})
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: "Something goes wrong trying to DeleteFile",
    });
  }
};
