import { pool } from "../classroom.db.js"
import { v4 as uuidv4 } from 'uuid';

export const PostSection = async (req, res) => {
    try {
        const Class_Id = req.params.Class_Id
        const { Name, Description, StartDate, EndDate, Type_Id } = req.body;
        var IsActive = true;
        var date = new Date();
        date.toString();
        let Id = uuidv4();


        const [rows] = await pool.query("CALL PostSection(?, ?, ?, ?, ?, ?, ?, ?, ?)", [
            Id,
            Name,
            Description,
            StartDate,
            EndDate,
            IsActive,
            date,
            Type_Id,
            Class_Id
        ]);

        const uploadedFiles = req.files;
        const fileNames = uploadedFiles.map(file => file.filename);
        const Route = req.dirPath;
        var IsActiveFile = true;
        var dateFile = new Date();
        dateFile.toString();
        var type = true;
        const Files = []
        for (const fileName of fileNames) {
            let Id_File = uuidv4();
            Files.push({ Id: Id_File, Name: fileName })
            const [rowsFiles] = await pool.query("CALL PostFile(?, ?, ?, ?, ?, ?, ?)", [
                Id_File,
                Route,
                fileName,
                IsActiveFile,
                dateFile,
                type,
                Id
            ]);
        }

        res.send([
            Id,
            Name,
            Description,
            StartDate,
            EndDate,
            IsActive,
            date,
            Type_Id,
            Files
        ]);
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "Something goes wrong trying to PostSection",
        });
    }
}

export const PutSection = async (req, res) => {
    try {
        const Class_Id = req.params.Class_Id
        const Id = req.params.Section_Id
        console.log(Id)
        const { Name, Description, StartDate, EndDate, Type_Id } = req.body;
        var date = new Date();
        date.toString();
        const [rows] = await pool.query("CALL PutSection(?, ?, ?, ?, ?, ?, ?, ?)", [
            Id,
            Name,
            Description,
            StartDate,
            EndDate,
            date,
            Type_Id,
            Class_Id
        ]);
        const uploadedFiles = req.files;
        const fileNames = uploadedFiles.map(file => file.filename);
        const Route = req.dirPath;
        var IsActiveFile = true;
        var dateFile = new Date();
        dateFile.toString();
        var type = true;
        const Files = []
        for (const fileName of fileNames) {
            let Id_File = uuidv4();
            Files.push({ Id: Id_File, Name: fileName })
            const [rowsFiles] = await pool.query("CALL PostFile(?, ?, ?, ?, ?, ?, ?)", [
                Id_File,
                Route,
                fileName,
                IsActiveFile,
                dateFile,
                type,
                Id
            ]);
        }

        res.send([
            Id,
            Name,
            Description,
            StartDate,
            EndDate,
            date,
            Type_Id,
            Files
        ]);
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "Something goes wrong trying to PutSection",
        });
    }
}

export const GetSectionData = async (req, res) => {
  try {
    const class_id = req.params.Class_Id
    const section_id = req.params.Section_Id
    const role = req.user.role
    const [rows] = await pool.query("CALL GetSection(?)", [
      section_id,
  ]);
  const [files] = await pool.query("CALL GetFiles(?)", [
    section_id,
]);
    res.send({Section: rows[0], Files: files[0]});

  } catch (error) {
      console.log(error)
      return res.status(500).json({
          message: "Something goes wrong trying to GetAllSections",
      });
  }
}

export const GetAllSections = async (req, res) => {
  try {
    const Id = req.params.Class_Id
    const role = req.user.role
    if(role === "Teacher"){
      const [rows] = await pool.query("CALL GetClassSections(?)", [
        Id
    ]);
    res.send(rows[0]);
    }
    else if(role === "Student"){
      const [rows] = await pool.query("CALL GetClassSectionsStudent(?)", [
        Id
    ]);
    res.send(rows[0]);
    }

    }catch (error) {
      console.log(error)
      return res.status(500).json({
          message: "Something goes wrong trying to GetAllSections",
      });
  }
}


/*
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
*/
