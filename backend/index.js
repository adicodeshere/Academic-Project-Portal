const express = require("express");

const connection = require("./db.js");
const app = express();
const bodyParser = require("body-parser");

const cors = require("cors");
app.use(cors());
app.use(bodyParser.json());

app.use(express.json()); //try-6 used for getting JSON object
app.use("/api/auth", require("./routes/auth.js"));
app.use("/api/addstudent", require("./routes/addstudents.js"));
app.use("/api/addteacher", require("./routes/addteachers.js"));
app.use("/api/getstudent", require("./routes/getstudent.js"));
app.use("/api/getteacher", require("./routes/getteacher.js"));
app.use("/api/getstudents", require("./routes/getAllStudent.js"));
app.use("/api/getteachers", require("./routes/getAllTeacher.js"));
app.use("/api/getdept", require("./routes/getdept.js"));
app.use(
  "/api/getstudentsforallocation",
  require("./routes/getstudentsforallocation.js")
);
app.use("/api/getstudentdetail", require("./routes/getstudentdetails.js"));
app.use("/api/getteacherdetail", require("./routes/getteacherdetails.js"));
app.use("/api/addproject", require("./routes/addProject.js"));
app.use("/api/getallproject", require("./routes/getAllProject.js"));
app.use("/api/deletestudent", require("./routes/deletestudent.js"));
app.use("/api/deleteteacher", require("./routes/deleteteacher.js"));
app.use("/api/editstudent", require("./routes/editstudent.js"));
app.use("/api/editteacher", require("./routes/editteacher.js"));
app.use("/api/project", require("./routes/getstudentProject.js"));
app.use("/api/getprojectdetails", require("./routes/getprojectdetails.js"));
app.use("/api/editprojectdetails", require("./routes/editprojectDetails.js"));
app.use("/api/addadmin", require("./routes/addAdmin.js"));
app.use("/api/addschedule", require("./routes/addschedule.js"));
app.use("/api/editschedule", require("./routes/editschedule.js"));
//app.use("/api/getschedules", require("./routes/getAllSchedule.js"));
//app.use("/api/getallschedule", require("./routes/getAllSchedule.js"));
app.use("/api/getAllSchedule", require("./routes/getAllSchedule.js"));
app.use("/api/deleteschedule", require("./routes/deleteschedule.js"));
app.use("/api/getAllocatedStudent", require("./routes/getallocatedStudent.js"));
app.use("/api/fixtitle", require("./routes/fixTitle.js"));
app.use("/api/rejectitle", require("./routes/rejectTitle.js"));
app.use("/api/getprojectmark", require("./routes/getprojectformarks.js"));
app.use("/api/savemarks", require("./routes/saveMarks.js"));
app.use(
  "/api/getteacherproject",
  require("./routes/getProjectAllocatedTeacher.js")
);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});
//

app.get("/", (req, res) => {
  res.json("Hello Adiii");
});
app.listen(8800, () => {
  console.log("Connected to backend");
});
