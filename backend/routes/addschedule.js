
// router.post('/', (req, res) => {
//     const task_name= req.body.task_name;
//     const task_date  = req.body.task_date;
  
//     // Insert the schedule data into the 'schedule' table
//     const sql = 'INSERT INTO schedule (task_name, task_date) VALUES (?, ?)';
//     connection  .query(sql, [task_name, task_date], (err, result) => {
//       if (err) {
//         res.status(500).json({ error: 'An error occurred while adding the schedule.' });
//       } else {
//         res.status(200).json({ message: 'Schedule added successfully.' });
//       }
//     });
//   });
  
// router.post('/addschedule', (req, res) => {
//   const task_name = req.body.task_name;
//   const task_date = req.body.task_date;

//   // Insert the schedule data into the 'schedule' table
//   const sql = 'INSERT INTO schedule (task_name, task_date) VALUES (?, ?)';
//   connection.query(sql, [task_name, task_date], (err, result) => {
//     if (err) {
//       console.error("An error occurred while adding the schedule:", err);
//       res.status(500).json({ error: 'Failed to add the schedule.' });
//     } else {
//       res.status(200).json({ message: 'Schedule added successfully.' });
//     }
//   });
// });


  // Convert the date from the React format (dd-mm-yyyy) to MySQL format (yyyy-mm-dd)
  // const [day, month, year] = task_date.split('-');
  // const formattedDate = `${year}-${month}-${day}`;

  // console.log(formattedDate);

  // Insert the schedule data into the 'schedule' table

const express = require("express");
const router = express.Router();
const connection = require("../db");
const bcrypt = require("bcryptjs");

router.post('/', (req, res) => {
  const task_name = req.body.task_name;
  const task_date = req.body.task_date;

  console.log(task_date);


  const sql = 'INSERT INTO schedule (task_name, date_allocated) VALUES (?, ?)';
  connection.query(sql, [task_name, task_date], (err, result) => {
    if (err) {
      res.status(500).json({ error: 'An error occurred while adding the schedule.' });
    } else {
      res.status(200).json({ message: 'Schedule added successfully.' });
    }
  });
});

  // Export the router
  module.exports = router;