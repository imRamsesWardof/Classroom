import {pool} from "../classroom.db.js"

export const GetDetails = async (req, res) => {

  try {
    const [rows] = await pool.query("CALL GetClassDetails(?)",[req.params.Id]);
    res.send(rows[0]);
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: "Something goes wrong trying to GetDetais",
    });
  }
}