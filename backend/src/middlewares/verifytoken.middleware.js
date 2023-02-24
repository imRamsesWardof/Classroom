import jwt from "jsonwebtoken";

export const TOKEN_KEY = 'v5QD2g&4$iX5o1WLF0z7#Cdj#7Npg#cs9jh^wJX4B&jw7KZDFX'

export const validateToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(401).json({
      status: 401,
      message: "Unauthorized",
    });
  }

  jwt.verify(token, TOKEN_KEY, (err, user) => {
    if(err){
      res.send('Access denied, token expired or icorrect')
    }else {
      next();
    }
  })
}