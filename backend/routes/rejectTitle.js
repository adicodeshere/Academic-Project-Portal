const express = require("express");
const router = express.Router();
const connection = require("../db");
const fetchid = require("../middleware/getId");

router.post("/", fetchid, async (req, res) => {
  const teacher_id = req.userid;
  const project_id = req.body.project_id;
  console.log("Enter:" + teacher_id);
  const q1 =
    "update project set title_status =0 , title= '' where project_id=?;";
  connection.query(q1, [project_id], (err, data) => {
    if (err) {
      console.log(err.message);
      return res.json(err);
    }
    console.log(data);
    return res.json(data);
  });
});

module.exports = router;
