const express = require("express");
const router = express.Router();
const connection = require("../db");

router.post("/", async (req, res) => {
  const id = req.body.task_id;
  console.log(id);
  const sql = "DELETE from schedule WHERE task_id = ? ";
  connection.query(sql, [id], (err, data) => {
    if (err) {
      console.log(err.message);
      return res.json(err);
    }
    console.log(data);
    return res.json(data);
  });
});

module.exports = router;
