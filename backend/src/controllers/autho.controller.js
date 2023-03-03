import { pool } from "../classroom.db.js";
import { compare } from "../helper/handleBcrypt.js";
import jwt from "jsonwebtoken";
import * as dotenv from 'dotenv' 
dotenv.config()

export const LoginWeb = async (req, res) => {
  const { Password, Username } = req.body;

  try {
    const [rows] = await pool.query("CALL LogIn (?)", [Username]);

    if (!(rows[0].length <= 0)) {
      const passwordHash = rows[0][0]["Password"];
      const checkPassword = await compare(Password, passwordHash);

      if (checkPassword) {
        const { Id, Name, Role } = rows[0][0];
        const newToken = jwt.sign({ id: Id, name: Name }, process.env.TOKEN_KEY , { expiresIn: "10m" });
        return res.status(200).json({
          message: "¡Login exitoso!",
          role: Role,
          token: newToken,
        });
      }
    }

    return res.status(404).json({
      message: "El email o la contraseña ingresada son incorrectos",
    }); 

  } catch (error) {
    return res.status(500).json({
      message: "Algo salió mal intentando hacer LoginWeb",
      error: error.toString()
    });
  }
};

export const LoginMobile = async (req, res) => {
  const { Password, Username } = req.body;

  try {
    const [rows] = await pool.query("CALL Login (?)", [Username]);

    if (!(rows[0].length <= 0)) {
      const passwordHash = rows[0][0]["Password"];
      const checkPassword = await compare(Password, passwordHash);

      if (checkPassword) {
        const { Id, Name, Role } = rows[0][0];

        if(Role === 'Admin'){
          const tokenKey = process.env.TOKEN_KEY
          const newToken = jwt.sign({ id: Id, name: Name }, process.env.TOKEN_KEY, { expiresIn: "10m" });
          return res.status(200).json({
            message: "¡Login exitoso!",
            role: Role,
            token: newToken,
          });
        }

        return res.status(404).json({
          message: "No eres administrador",
        });
        
      }
    }

    return res.status(404).json({
      message: "El email o la contraseña ingresada son incorrectos",
    }); 

  } catch (error) {
    return res.status(500).json({
      message: "Algo salió mal intentando hacer LoginMobile",
      error: error.toString()
    });
  }
};


