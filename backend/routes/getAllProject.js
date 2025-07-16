const express = require("express");
const router = express.Router();
const connection = require("../db");

router.get("/", async (req, res) => {
  const q1 =
    "select pa.project_id project_id,s.name StudentName, t.name TeacherName, p.title title, domain, technology_used from project_allocation pa, student s, teacher t, project p where pa.prn=s.prn and pa.project_id=p.project_id and pa.teacher_id= t.teacher_id;";
  connection.query(q1, (err, data) => {
    if (err) {
      console.log(err.message);
      return res.json(err);
    }
    return res.json(data);
  });
});

module.exports = router;
