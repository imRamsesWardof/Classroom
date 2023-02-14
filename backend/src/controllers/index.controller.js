import { pool } from "../classroom.db.js";

export const ping = async (req, res) => {
  const [result] = await pool.query('Select "pong" as Conexion');
  res.json(result);
};