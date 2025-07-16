import axios from "axios";
import React, { useEffect, useState } from "react";

function EditScheduleModal(props) {
  const { editTask } = props;

  const [taskName, setTaskName] = useState("");
  const [taskDate, setTaskDate] = useState("");

  useEffect(() => {
    if (editTask?.taskName || editTask?.taskDate) {
      setTaskName(editTask?.taskName);

      const dateObj = new Date(editTask?.taskDate);
      if (dateObj.toDateString() !== "Invalid Date") {
        const month =
          dateObj.getMonth() + 1 < 10
            ? `0${dateObj.getMonth() + 1}`
            : dateObj.getMonth() + 1;
        const date =
          dateObj.getDate() < 10 ? `0${dateObj.getDate()}` : dateObj.getDate();

        const dateStr = `${dateObj.getFullYear()}-${month}-${date}`;

        setTaskDate(dateStr);
      }
    }
  }, [editTask?.taskName, editTask?.taskDate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(editTask);
      const response = await axios.post(
        "http://localhost:8800/api/editschedule",
        {
          id: editTask.task_id,
          task_name: taskName,
          task_date: taskDate,
        }
      );

      if (response?.data?.message) {
        setTaskName("");
        setTaskDate("");
        alert("Schedule updated successfully");
      } else {
        alert("Failed to update the schedule");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div
      className="modal fade"
      id="editScheduleModal"
      tabIndex="-1"
      aria-labelledby="editScheduleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="editScheduleModalLabel">
              Edit Schedule
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
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
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  Save changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditScheduleModal;
