import { pool } from "../classroom.db.js";
import { v4 as uuidv4 } from "uuid";
import { encrypt, compare } from "../helper/handleBcrypt.js";
import jwt from "jsonwebtoken";
import { TOKEN_KEY } from "../middlewares/verifytoken.middleware.js";

/* export const Register = async (req, res) => {
  try {
    const { Nombre, Apellido, Email, Telefono, Password } = req.body;
    let Id = uuidv4();
    const passwordHash = await encrypt(Password);
    const Rol_Id = "7e9e8c46-7afd-11ed-aeac-fcaa14a02012"; //Id de un cliente
    var IsActive = false;
    var date = new Date();
    date.toString();

    const [rows] = await pool.query(
      "CALL PostUsuario( ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        Id,
        Nombre,
        Apellido,
        Email,
        Telefono,
        passwordHash,
        IsActive,
        date,
        Rol_Id,
      ]
    );
    res.send({
      Id: rows.insertId,
      Nombre,
      Apellido,
      Email,
      Telefono,
      passwordHash,
      IsActive,
      date,
      Rol_Id,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong when trying to register",
    });
  }
};
 */
export const LogIn = async (req, res) => {
  const { password, usuario } = req.body;

  try {
    const [rows] = await pool.query("CALL LogIn (?)", [usuario]);

    console.log("datos del usuario");
    const { Nombre, Apellido, Rol, Email } = rows[0][0];
    const dataUser = {
      Nombre,
      Apellido,
      Email,
      Rol,
    };
    console.log(dataUser);

    if (!(rows[0].length <= 0)) {
      console.log("Coincidencia encontrada");
      console.log(rows[0]);
      console.log("Contraceña Hasheada desde la base de datos");
      const passwordHash = rows[0][0]["Password"];
      console.log(passwordHash);

      console.log("Tamaño del arreglo:");
      console.log(rows[0].length);
      const checkPassword = await compare(password, passwordHash);

      console.log("comparacion de contraceñas es:");
      console.log(checkPassword);

      if (checkPassword) {
        const newToken = jwt.sign({ nombre: "Ramses" }, TOKEN_KEY, {
          expiresIn: "10m",
        });
        console.log("Las contraceñas coinciden");
        return res.status(200).json({
          message: "Puedes pasar",
          token: newToken,
        });
      }
    }

    console.log("Las contraceñas NO coinciden");
    return res.status(404).json({
      message: "El email o la contraceña estan mal",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong trying to login",
    });
  }
};

export const Reset = async (req, res) => {
  const { usuario } = req.body;

  try {
    const [rows] = await pool.query("CALL IfUserExist( ? )", [usuario]);
    console.log(rows[0][0]);

    if (rows[0].length <= 0) {
      return res.status(500).json({
        message:
          "That address is either invalid, not a verified primary email or is not associated with a personal user account. Organization billing emails are only for notifications",
      });
    } else {

      //TODO: Organizar el codigo
      const contentHTML = `
      <div class="main" style="
      margin: auto;
      padding: 24px;
      max-width: 550px;
      min-width: 450px;
      ">
      <div class="hoja" style="
      padding: 25px;
      border-left: 0.01rem solid #dadce0;
      border-top: 0.01rem solid #dadce0;
      border-right: 0.01rem solid #dadce0;
      border-bottom: 0.01rem solid #dadce0;
      border-radius: 5px;
      ">
        <div class="header">
          <img class="header__logo" src="https://inseel.com/wp-content/uploads/2022/06/Logo.png" alt="logo" height="60px">
          <h2 class="header__h2" style=" 
          margin: 0 10px;
          color: black; 
          ">Ingeiería en Seguridad y Electrónica S.A de C.V.</h1>
        </div>
        <div class="body" style="
        margin: 0 10px;
        color: black;
        ">
          <div class="card">
            <h3 class="card__h3" style="
            margin-top: 20px;
            margin-bottom: 0px;
            ">Restauración de Contraseña</h3>
            <p class="card__p" style="
            margin-top: 0px;
            margin-bottom: 0px;
            ">Escuchamos que perdiste tu contraseña de INSEEL. ¡Lo siento por eso!</p>
            <p class="card__p" style="
            margin-top: 5px;
            margin-bottom: 0px;
            ">¡Pero no te preocupes! Puede utilizar el siguiente botón para restablecer su contraseña:</p>

            <div class="card__bottom" style="
              margin: auto;
              position: relative;
              left: 120px;
            ">

              <a class="card__a" href="http://localhost:3000/login" align="center" style="
            display: inline-block;
            background: #3a3c93;
            color: #ffffff;
            font-size: 14px;
            font-weight: 700;
            line-height: 120%;
            margin: 20px 0;
            text-decoration: none;
            text-transform: none;
            padding: 15px 25px;
            border-radius: 4px;
            "> Cambiar contraseña
              </a></ </div>
            </div>
          </div>
          <div style="
        border-bottom: 0.01rem solid #dadce0;
        "></div>
          <p style="
        margin: 0 10px;
        color: black; 
        margin-top: 20px;
        ">Si no utiliza este enlace dentro de las 3 horas, caducará. Para obtener un nuevo enlace de restablecimiento de
            contraseña, visite: https://inseel.com</p>
        </div>
      </div>

      `;

      let mailTransporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "up200893@alumnos.upa.edu.mx",
          pass: "JUANup202093",
        },
      });

      let mailDetails = {
        from: "up200893@alumnos.upa.edu.mx",
        to: "ramseswardof@gmail.com",
        subject: "[INSEEL] Restaurar contraseña",
        html: contentHTML,
      };

      mailTransporter.sendMail(mailDetails, function (err, data) {
        if (err) {
          console.log("Error Occurs");
          console.log(err);
        } else {
          console.log("Email sent successfully");
        }
      });

      return res.status(200).json({
        message: "Se envio un email al correo",
      });
    }
  } catch (error) {
    console.log(error);
  }
};
