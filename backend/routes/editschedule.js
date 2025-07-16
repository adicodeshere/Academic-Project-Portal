const express = require("express");
const router = express.Router();
const connection = require("../db");

router.post("/", (req, res) => {
  const task_name = req.body.task_name;
  const task_date = req.body.task_date;
  const id = req.body.id;
  console.log(req.body);
  console.log(task_name + task_date + id);

  // Insert the schedule data into the 'schedule' table
  const sql =
    "UPDATE schedule set task_name=?, date_allocated=? WHERE task_id=?";
  connection.query(sql, [task_name, task_date, id], (err, result) => {
    if (err) {
      console.log(err);
      res
        .status(500)
        .json({ error: "An error occurred while adding the schedule." });
    } else {
      console.log(result);
      res.status(200).json({ message: "Schedule updated successfully." });
    }
  });
});

// Export the router
module.exports = router;
