import jwt from "jsonwebtoken";
import * as dotenv from 'dotenv'
dotenv.config()

export const validateToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(401).json({
      status: 401,
      message: "Token no encontrado",
    });
  }

  jwt.verify(token, process.env.TOKEN_KEY , (err, user) => {
    if(err){
      res.send('Acceso denegado, tu token ha expirado o es incorrecto.')
    }else {
      next();
    }
  })
}