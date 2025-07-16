const express = require("express");
const router = express.Router();
const connection = require("../db");
const fetchid = require("../middleware/getId");

router.post("/", fetchid, async (req, res) => {
  const teacher_id = req.userid;
  console.log("Enter:" + teacher_id);
  const q1 =
    "select * from project p left join marks m on p.project_id= m.project_id left join project_allocation pa on p.project_id= pa.project_id  left join student s on pa.prn = s.prn where teacher_id=?;";
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
