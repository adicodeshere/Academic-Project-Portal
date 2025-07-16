
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await axios.post(
  //       "http://localhost:8800/api/addschedule",
  //       {
  //         task_name: taskName,
  //         task_date: taskDate,
  //       }
  //     );

  //     if (response.data.message) {
  //       alert("Schedule added successfully");
  //       setTaskName("");
  //       setTaskDate("");
  //     } else {
  //       alert("Failed to add the schedule");
  //     }
  //   } catch (error) {
  //     console.error("An error occurred:", error);
  //   }
  // };


  //``````````````````````````````````````````````````````````````````````````````````//
/*  import React, { useState } from "react";
  import axios from "axios"; // You'll need to install axios
  
  const AddSchedule = () => {
    const [taskName, setTaskName] = useState("");
    const [taskDate, setTaskDate] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Format the date to yyyy-mm-dd format
    //const formattedDate = new Date(taskDate).toISOString().split('T')[0];
  
    try {
      const response = await axios.post(
        "http://localhost:8800/api/addschedule",
        {
          task_name: taskName,
          task_date: taskDate,
        }
      );
  
      if (response.data.message) {
        alert("Schedule added successfully");
        setTaskName("");
        setTaskDate("");
      } else {
        alert("Failed to add the schedule");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  
  return (
    <div>
      <h2>Add Schedule</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="taskName" className="form-label">
            Task Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="taskName"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="taskDate" className="form-label">
            Task Date:
          </label>
          <input
            type="date"
            className="form-control"
            id="taskDate"
            value={taskDate}
            onChange={(e) => setTaskDate(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Task into Schedule
        </button>
      </form>
    </div>
  );
};

export default AddSchedule;
*/
import React, { useState } from "react";
import axios from "axios";

const AddSchedule = () => {
  const [taskName, setTaskName] = useState("");
  const [taskDate, setTaskDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8800/api/addschedule", {
        task_name: taskName,
        task_date: taskDate,
      });

      if (response.data.message) {
        alert("Schedule added successfully");
        setTaskName("");
        setTaskDate("");
      } else {
        alert("Failed to add the schedule");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className="container">
      <div className="card mt-4">
        <div className="card-body">
          <h2 className="card-title">Add To Schedule</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="taskName" className="form-label">
                Task Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="taskName"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="taskDate" className="form-label">
                Task Date:
              </label>
              <input
                type="date"
                className="form-control"
                id="taskDate"
                value={taskDate}
                onChange={(e) => setTaskDate(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Add Task to Schedule
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddSchedule;

