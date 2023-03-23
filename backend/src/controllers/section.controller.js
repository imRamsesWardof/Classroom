import { pool } from "../classroom.db.js"
import { v4 as uuidv4 } from 'uuid';

export const PostSection = async (req, res) => {
    try {
        const Class_Id = req.params.Class_Id
        const { Name, Description, StartDate, EndDate, Type_Id } = req.body;
        var IsActive = true;
        var date = new Date();
        date.toString();
        let Id = req.Id


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

