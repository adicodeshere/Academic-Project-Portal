import React, { useState, useEffect, useCallback } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { BiHome } from "react-icons/bi";

import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import axios from "axios";

const GetAllStudent = () => {
  const [data, setData] = useState([]);

  const token = localStorage.getItem("token");
  const headers = {
    "Auth-token": token,
  };

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.post(
        "http://localhost:8800/api/getAllocatedStudent",
        null,
        { headers }
      );

      if (response?.data) {
        setData(response.data);
        console.log(data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  const acceptTitle = useCallback(async (project_id) => {
    console.log(project_id);
    try {
      const response = await axios.post(
        "http://localhost:8800/api/fixtitle",
        { project_id },
        { headers }
      );

      if (response) {
        alert("Title Fixed");
        window.location.reload();
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  });

  const rejectTitle = useCallback(async (project_id) => {
    console.log(project_id);
    try {
      const response = await axios.post(
        "http://localhost:8800/api/rejectitle",
        { project_id },
        { headers }
      );

      if (response) {
        alert("Title Rejected");
        window.location.reload();
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  });

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Container fluid className="p-3">
      <h1 style={{ fontFamily: "Garamond, serif", fontWeight: "bold" }}>
        <u>
          <center>Allocated Students and Project Titles</center>
        </u>
      </h1>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <Button variant="primary" onClick={fetchData}>
          Refresh Data
        </Button>
      </div>
      <Card>
        <Card.Body>
          <Form>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th className="w-25">PRN</th>
                  <th className="w-25">Student Name</th>
                  <th className="w-25">Title</th>
                  <th className="w-25">Status of Project Title</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.project_id}>
                    <td className="w-25">{item.prn}</td>
                    <td className="w-25">{item.Student_Name}</td>
                    <td className="w-25">{item.title}</td>
                    <td className="w-25">
                      {item.title_Status == 0 && (
                        <Button
                          variant="primary"
                          onClick={() => acceptTitle(item.project_id)}
                          className="btn-sm mx-2"
                        >
                          Accept
                        </Button>
                      )}
                      <Button
                        variant="primary"
                        onClick={() => rejectTitle(item.project_id)}
                        className="btn-sm mx-2"
                      >
                        Reject
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default GetAllStudent;
