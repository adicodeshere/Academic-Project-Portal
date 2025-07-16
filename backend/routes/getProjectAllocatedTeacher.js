const express = require("express");
const router = express.Router();
const connection = require("../db");

router.get("/", async (req, res) => {
  const project_id = req.body.project_id;
  const q1 =
    "select teacher_id , count(project_id) ProjectCount from project_allocation group by teacher_id order by teacher_id;";
  connection.query(q1, null, (err, data) => {
    if (err) {
      console.log(err.message);
      return res.json(err);
    }
    return res.json(data);
  });
});

module.exports = router;
