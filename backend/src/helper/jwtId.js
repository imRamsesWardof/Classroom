import jwt from "jsonwebtoken";
import * as dotenv from 'dotenv'
dotenv.config();

export const obtainId = (token) => {
    return new Promise((resolve, reject) => {
      jwt.verify(token, process.env.TOKEN_KEY, function (err, decoded) {
        if (err) {
          reject(err);
        } else {
          resolve(decoded.id);
        }
      });
    });
  };