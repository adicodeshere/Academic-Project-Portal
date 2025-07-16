const express = require("express");
const router = express.Router();
const connection = require("../db");
const bcrypt = require("bcryptjs");

router.post("/", async (req, res) => {
  const email = req.body.email;
  const pass = req.body.pass;
  const role = req.body.role;

  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPass = await bcrypt.hash(pass, salt);
  const q2 = "INSERT INTO login(email, password, role) VALUES (?, ?, 'Admin');";
  connection.query(q2, [email, hashedPass], (err, data) => {
    if (err) {
      console.log(err);
      return res.json({ msg: " User already exists" });
    }
    console.log("Login Admin added successfully");
    return res.json({ msg: "Student added successfully" });
  });
});

module.exports = router;
