const express = require("express");
const router = express.Router();
const connection = require("../db");
const fetchid = require("../middleware/getId");

router.post("/", fetchid, async (req, res) => {
  const teacher_id = req.userid;
  console.log("Enter:" + teacher_id);
  const q1 =
    "select s.prn, pa.project_id,semester, s.name as Student_Name, title, title_Status from project_allocation pa , teacher t, student s, project p where pa.project_id=p.project_id and  pa.prn=s.prn and pa.teacher_id=t.teacher_id and pa.teacher_id=?;";
  connection.query(q1, [teacher_id], (err, data) => {
    if (err) {
      console.log(err.message);
      return res.json(err);
    }
    console.log(data);
    return res.json(data);
  });
});

module.exports = router;
