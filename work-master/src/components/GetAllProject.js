import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

const GetAllProjects = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [searchText, setSearchText] = useState({});
  const [sortField, setSortField] = useState("");
  const [sortDirection, setSortDirection] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8800/api/getallproject"
      );
      setProjects(response.data);
      console.log(response.data);
      setFilteredProjects(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearchChange = (field, value) => {
    setSearchText((prevSearchText) => ({
      ...prevSearchText,
      [field]: value,
    }));
  };

  const filterProjects = useCallback(() => {
    const filtered = projects.filter((project) =>
      Object.keys(searchText).every((field) => {
        const fieldValue = String(project[field]).toLowerCase();
        const searchValue = searchText[field].toLowerCase();
        return fieldValue.includes(searchValue);
      })
    );

    setFilteredProjects(filtered);
    setCurrentPage(1);
  }, [projects, searchText]);

  useEffect(() => {
    filterProjects();
  }, [searchText, filterProjects]);

  const handleSort = (field) => {
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
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  let sortedProjects = [...filteredProjects];

  if (sortField) {
    sortedProjects.sort((a, b) => {
      const valueA = a[sortField];
      const valueB = b[sortField];

      if (typeof valueA === "string" && typeof valueB === "string") {
        return sortDirection === "asc"
          ? valueA.localeCompare(valueB)
          : valueB.localeCompare(valueA);
      } else if (typeof valueA === "string") {
        return sortDirection === "asc" ? -1 : 1;
      } else if (typeof valueB === "string") {
        return sortDirection === "asc" ? 1 : -1;
      }

      return sortDirection === "asc" ? valueA - valueB : valueB - valueA;
    });
  }

  const currentProjects = sortedProjects.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(sortedProjects.length / itemsPerPage);

  return (
    <div className="m-3">
      <div className="m-5">
        <Button variant="primary" onClick={fetchData}>
          Fetch Data
        </Button>
      </div>
      <Card>
        <Card.Body>
          <Form>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th onClick={() => handleSort("project_id")}>
                    Project ID{" "}
                    {sortField === "projectId" &&
                      (sortDirection === "asc" ? "▲" : "▼")}
                  </th>
                  <th onClick={() => handleSort("StudentName")}>
                    Student Name{" "}
                    {sortField === "StudentName" &&
                      (sortDirection === "asc" ? "▲" : "▼")}
                  </th>
                  <th onClick={() => handleSort("TeacherName")}>
                    Teacher Name{" "}
                    {sortField === "TeacherName" &&
                      (sortDirection === "asc" ? "▲" : "▼")}
                  </th>
                  <th onClick={() => handleSort("title")}>
                    Title{" "}
                    {sortField === "title" &&
                      (sortDirection === "asc" ? "▲" : "▼")}
                  </th>
                  <th onClick={() => handleSort("domain")}>
                    Domain{" "}
                    {sortField === "domain" &&
                      (sortDirection === "asc" ? "▲" : "▼")}
                  </th>
                  <th onClick={() => handleSort("technology")}>
                    Technology{" "}
                    {sortField === "technology" &&
                      (sortDirection === "asc" ? "▲" : "▼")}
                  </th>
                </tr>
                <tr>
                  <th>
                    <Form.Control
                      type="text"
                      placeholder="Search Project ID"
                      onChange={(e) =>
                        handleSearchChange("project_id", e.target.value)
                      }
                    />
                  </th>
                  <th>
                    <Form.Control
                      type="text"
                      placeholder="Search Student"
                      onChange={(e) =>
                        handleSearchChange("StudentName", e.target.value)
                      }
                    />
                  </th>
                  <th>
                    <Form.Control
                      type="text"
                      placeholder="Search Teacher"
                      onChange={(e) =>
                        handleSearchChange("TeacherName", e.target.value)
                      }
                    />
                  </th>
                  <th>
                    <Form.Control
                      type="text"
                      placeholder="Search Title"
                      onChange={(e) =>
                        handleSearchChange("title", e.target.value)
                      }
                    />
                  </th>
                  <th>
                    <Form.Control
                      type="text"
                      placeholder="Search Domain"
                      onChange={(e) =>
                        handleSearchChange("domain", e.target.value)
                      }
                    />
                  </th>
                  <th>
                    <Form.Control
                      type="text"
                      placeholder="Search Technology"
                      onChange={(e) =>
                        handleSearchChange("technology", e.target.value)
                      }
                    />
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentProjects.map((project) => (
                  <tr key={project.project_id}>
                    <td>{project.project_id}</td>
                    <td>{project.StudentName}</td>
                    <td>{project.TeacherName}</td>
                    <td>{project.title}</td>
                    <td>{project.domain}</td>
                    <td>{project.technology_used}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Form>
          {totalPages > 1 && (
            <div className="pagination">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
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
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default GetAllProjects;
