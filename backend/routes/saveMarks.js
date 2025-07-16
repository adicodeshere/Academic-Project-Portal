const express = require("express");
const router = express.Router();
const connection = require("../db");
const fetchid = require("../middleware/getId");

router.post("/", fetchid, async (req, res) => {
  const teacher_id = req.userid;
  const project = req.body.project;
  const project_id = req.body.project.project_id;
  const synopsis = req.body.project.synopsis;
  const review1 = req.body.project.review1;
  const review2 = req.body.project.review2;
  const review3 = req.body.project.review3;
  const final = req.body.project.final;
  console.log("Enter:" + teacher_id);
  console.log(project);
  const q1 = "select * from marks where project_id=?;";
  const q2 =
    "update marks set review1=?, review2=? , review3=? ,final=?, synopsis=? where project_id=?;";
  const q3 =
    "insert into marks (project_id,synopsis,review1,review2,review3,final) values(?,?,?,?,?,?)";
  connection.query(q1, [project_id], (err, data) => {
    if (err) {
      console.log(err.message);
      return res.json(err);
    }
    console.log("Query1");
    console.log(data);
    if (data[0]) {
      connection.query(
        q2,
        [review1, review2, review3, final, synopsis, project_id],
        (err, data2) => {
          if (err) {
            console.log(err.message);
            return res.json(err);
          }
          console.log(data2);
          console.log("Query2");
          res.send({ message: "Marks updated" });
        }
      );
    } else {
      connection.query(
        q3,
        [project_id, synopsis, review1, review2, review3, final],
        (err, data3) => {
          if (err) {
            console.log(err.message);
            return res.json(err);
          }
          console.log(data3);
          console.log("Query3");
          res.send({ message: "Marks Inserted" });
        }
      );
    }
  });
});

module.exports = router;
