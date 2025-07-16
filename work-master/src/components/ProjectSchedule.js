/*
import React, { useState, useEffect, useCallback } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import axios from "axios";
import EditScheduleModal from "./EditScheduleModal";

function ProjectSchedule() {
  const [taskItems, setTaskItems] = useState([
    {
      id: 1,
      taskName: "Review-1",
      taskDate: "10-09-2023",
    },
    {
      id: 2,
      taskName: "Review-2",
      taskDate: "10-20-2023",
    },
    {
      id: 3,
      taskName: "Final Review",
      taskDate: "11-5-2023",
    },
  ]);
  const [sortField, setSortField] = useState("");
  const [sortDirection, setSortDirection] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [editItem, setEditItem] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(
        "http://localhost:8800/api/getschedules"
      );
      if (response?.data?.data) {
        setTaskItems(response?.data);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  function handleSort(field) {
    if (field === sortField) {
      // Toggle sort direction if the same field is clicked again
      setSortDirection((prevSortDirection) =>
        prevSortDirection === "asc" ? "desc" : "asc"
      );
    } else {
      // Set sort field and default sort direction to ascending
      setSortField(field);
      setSortDirection("asc");
    }
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleDelete = async (item) => {
    if (
      window.confirm(`Are you sure you want to delete '${item?.taskName}' ?`)
    ) {
      console.log("Delete:::", item?.taskName);

      try {
        const response = await axios.post(
          "http://localhost:8800/api/deleteschedule",
          {
            id: item?.id,
          }
        );

        if (response?.data?.message) {
          alert("Schedule deleted successfully");
        } else {
          alert("Failed to delete the schedule");
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    }
  };

  return (
    <div className="container-fluid">
      <Card>
        <Card.Title className="m-3">Project Schedule</Card.Title>
        <Card.Body>
          {taskItems?.length ? (
            <>
              <Form>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Sr. No. </th>
                      <th onClick={() => handleSort("name")}>
                        Task Name{" "}
                        {sortField === "taskName" &&
                          (sortDirection === "asc" ? "▲" : "▼")}
                      </th>
                      <th onClick={() => handleSort("name")}>
                        Task Date{" "}
                        {sortField === "taskDate" &&
                          (sortDirection === "asc" ? "▲" : "▼")}
                      </th>
                      {localStorage.getItem("userRole") === "Admin" && (
                        <th onClick={() => handleSort("name")}>Options</th>
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {taskItems.map((item, index) => (
                      <tr key={`item-${index}`}>
                        <td>{index + 1}</td>
                        <td>{item.taskName}</td>
                        <td>{item.taskDate}</td>
                        {localStorage.getItem("userRole") === "Admin" && (
                          <td>
                            <AiOutlineEdit
                              className="edit-icon me-3"
                              data-bs-toggle="modal"
                              data-bs-target="#editScheduleModal"
                              onClick={() => setEditItem(item)}
                            />
                            <AiOutlineDelete
                              className="delete-icon"
                              onClick={() => handleDelete(item)}
                            />
                          </td>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Form>
              <div className="pagination">
                {Array.from({ length: taskItems?.length }, (_, i) => i + 1).map(
                  (pageNumber) => (
                    <Button
                      key={pageNumber}
                      variant={
                        currentPage === pageNumber ? "primary" : "secondary"
                      }
                      onClick={() => handlePageChange(pageNumber)}
                    >
                      {pageNumber}
                    </Button>
                  )
                )}
              </div>
            </>
          ) : (
            <h5>No Schedule Found</h5>
          )}
        </Card.Body>
      </Card>
      <EditScheduleModal editTask={editItem} />
    </div>
  );
}

export default ProjectSchedule;*/

//`````````````````````````````````````````````````````````````````````````````````````````````//
/*
import React, { useState, useEffect, useCallback } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import axios from "axios";
import EditScheduleModal from "./EditScheduleModal";

function ProjectSchedule() {
  const [taskItems, setTaskItems] = useState([]);
  const [sortField, setSortField] = useState("");
  const [sortDirection, setSortDirection] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [editItem, setEditItem] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get("http://localhost:8800/api/getallschedule");
      if (response?.data) {
        setTaskItems(response?.data);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Rest of your component remains the same

  return (
    <div className="container-fluid">
    <Card>
      <Card.Title className="m-3">Project Schedule</Card.Title>
      <Card.Body>
        {taskItems?.length ? (
          <>
            <Form>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Sr. No. </th>
                    <th onClick={() => handleSort("name")}>
                      Task Name{" "}
                      {sortField === "taskName" &&
                        (sortDirection === "asc" ? "▲" : "▼")}
                    </th>
                    <th onClick={() => handleSort("name")}>
                      Task Date{" "}
                      {sortField === "taskDate" &&
                        (sortDirection === "asc" ? "▲" : "▼")}
                    </th>
                    {localStorage.getItem("userRole") === "Admin" && (
                      <th onClick={() => handleSort("name")}>Options</th>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {taskItems.map((item, index) => (
                    <tr key={`item-${index}`}>
                      <td>{index + 1}</td>
                      <td>{item.taskName}</td>
                      <td>{item.taskDate}</td>
                      {localStorage.getItem("userRole") === "Admin" && (
                        <td>
                          <AiOutlineEdit
                            className="edit-icon me-3"
                            data-bs-toggle="modal"
                            data-bs-target="#editScheduleModal"
                            onClick={() => setEditItem(item)}
                          />
                          <AiOutlineDelete
                            className="delete-icon"
                            onClick={() => handleDelete(item)}
                          />
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Form>
            <div className="pagination">
              {Array.from({ length: taskItems?.length }, (_, i) => i + 1).map(
                (pageNumber) => (
                  <Button
                    key={pageNumber}
                    variant={
                      currentPage === pageNumber ? "primary" : "secondary"
                    }
                    onClick={() => handlePageChange(pageNumber)}
                  >
                    {pageNumber}
                  </Button>
                )
              )}
            </div>
          </>
        ) : (
          <h5>No Schedule Found</h5>
        )}
      </Card.Body>
    </Card>
    <EditScheduleModal editTask={editItem} />
  </div>
);
}

export default ProjectSchedule;
*/
//``````````````````````````````````````````````````````````````````````````//

import React, { useState, useEffect, useCallback } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import axios from "axios";
import EditScheduleModal from "./EditScheduleModal";

function ProjectSchedule() {
  const [taskItems, setTaskItems] = useState([]);
  const [sortField, setSortField] = useState("");
  const [sortDirection, setSortDirection] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [editItem, setEditItem] = useState(null);
  const itemsPerPage = 10; // Number of items to show per page

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(
        "http://localhost:8800/api/getAllSchedule"
      );
      if (response?.data) {
        setTaskItems(response?.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  console.log("taskItems:", taskItems);

  // Function to handle sorting of the table
  const handleSort = (field) => {
    // Toggle sort direction if the same field is clicked again
    if (field === sortField) {
      setSortDirection((prevSortDirection) =>
        prevSortDirection === "asc" ? "desc" : "asc"
      );
    } else {
      // Set sort field and default sort direction to ascending
      setSortField(field);
      setSortDirection("asc");
    }
  };

  // Function to handle pagination and change current page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Function to handle deleting a schedule item
  const handleDelete = async (item) => {
    if (
      window.confirm(`Are you sure you want to delete '${item?.task_name}' ?`)
    ) {
      try {
        // Implement the delete logic here
        console.log(item.task_id);
        const response = await axios.post(
          "http://localhost:8800/api/deleteschedule",
          {
            task_id: item?.task_id,
          }
        );

        if (response?.data?.message) {
          alert("Schedule deleted successfully");
          fetchData(); // Refresh the data after deletion
        } else {
          alert("Failed to delete the schedule");
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    }
  };

  // Calculate the index of the first and last items to display on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Sort the schedule items based on the selected field and direction
  let sortedTaskItems = [...taskItems];

  if (sortField) {
    sortedTaskItems.sort((a, b) => {
      const valueA = a[sortField];
      const valueB = b[sortField];

      if (typeof valueA === "string") {
        return sortDirection === "asc"
          ? valueA.localeCompare(valueB)
          : valueB.localeCompare(valueA);
      } else if (sortField === "taskDate") {
        // Convert the date string to a Date object for sorting
        const dateA = new Date(a[sortField]);
        const dateB = new Date(b[sortField]);
        return sortDirection === "asc" ? dateA - dateB : dateB - dateA;
      }

      return sortDirection === "asc" ? valueA - valueB : valueB - valueA;
    });
  }

  // Slice the items to display only the items on the current page
  const currentItems = sortedTaskItems.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="container-fluid">
      <br></br>
      <h1 style={{ fontFamily: "Garamond, serif", fontWeight: "bold" }}>
        <u>
          <center>Project Schedule</center>
        </u>
      </h1>
      <Card>
        {/* <Card.Title className="m-3">Project Schedule</Card.Title> */}
        <Card.Body>
          {taskItems?.length ? (
            <>
              <Form>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Sr. No.</th>
                      <th onClick={() => handleSort("taskName")}>
                        Task Title{" "}
                        {sortField === "taskName" &&
                          (sortDirection === "asc" ? "▲" : "▼")}
                      </th>
                      <th onClick={() => handleSort("taskDate")}>
                        Date Allocated{" "}
                        {sortField === "taskDate" &&
                          (sortDirection === "asc" ? "▲" : "▼")}
                      </th>
                      {localStorage.getItem("userRole") === "Admin" && (
                        <th>Options</th>
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {currentItems.map((item, index) => (
                      <tr key={`item-${index}`}>
                        {/* <td>{index + 1}</td> */}
                        <td>{index + 1 + (currentPage - 1) * itemsPerPage}</td>
                        <td>{item.task_name}</td>
                        {/* <td>{item.taskDate}</td> */}
                        <td>
                          {new Date(item.date_allocated).toLocaleDateString()}
                        </td>
                        {localStorage.getItem("userRole") === "Admin" && (
                          <td>
                            <AiOutlineEdit
                              className="edit-icon me-3"
                              data-bs-toggle="modal"
                              data-bs-target="#editScheduleModal"
                              onClick={() => setEditItem(item)}
                            />
                            <AiOutlineDelete
                              className="delete-icon"
                              onClick={() => handleDelete(item)}
                            />
                          </td>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Form>
              <div className="pagination">
                {Array.from(
                  { length: Math.ceil(sortedTaskItems.length / itemsPerPage) },
                  (_, i) => i + 1
                ).map((pageNumber) => (
                  <Button
                    key={pageNumber}
                    variant={
                      currentPage === pageNumber ? "primary" : "secondary"
                    }
                    onClick={() => handlePageChange(pageNumber)}
                  >
                    {pageNumber}
                  </Button>
                ))}
              </div>
            </>
          ) : (
            <h5>No Schedule Found</h5>
          )}
        </Card.Body>
      </Card>
      <EditScheduleModal editTask={editItem} />
    </div>
  );
}

export default ProjectSchedule;
