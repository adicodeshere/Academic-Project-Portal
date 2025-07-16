// router.get("/", async (req, res) => {
//   const q1 = "select * from schedule ;";
//   connection.query(q1, (err, data) => {
//     if (err) {
//       console.log(err.message);
//       return res.json(err);
//     }
//     return res.json(data);
//   });
// });

const express = require("express");
const router = express.Router();
const connection = require("../db");

router.get("/", async (req, res) => {
  console.log("Request to /api/getAllSchedule received");
  const q1 = "SELECT * FROM schedule order by date_allocated;";
  connection.query(q1, (err, data) => {
    if (err) {
      console.log("Error fetching data:", err);
      return res
        .status(500)
        .json({ error: "An error occurred while fetching the schedule data." });
    }
    console.log("Schedule data fetched successfully:", data);
    return res.json(data);
    //    return res.status(200).json(data);
  });
});

module.exports = router;
