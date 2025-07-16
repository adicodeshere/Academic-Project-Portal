// import React, { useState, useEffect, useCallback } from "react";
// import Button from "react-bootstrap/Button";
// import Table from "react-bootstrap/Table";
// import Card from "react-bootstrap/Card";
// import Form from "react-bootstrap/Form";
// import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
// import axios from "axios";

// const AllMarks = () => {
//   const [data, setData] = useState([]);

//   const token = localStorage.getItem("token");
//   const headers = {
//     "Auth-token": token,
//   };

//   const fetchData = useCallback(async () => {
//     try {
//       const response = await axios.post(
//         "http://localhost:8800/api/getprojectmark",
//         null,
//         { headers }
//       );

//       if (response?.data) {
//         setData(response.data);
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   }, []);

//   const saveMarks = useCallback(
//     async (project) => {
//       try {
//         // Retrieve the updated values from the contentEditable elements
//         const updatedSynopsis = document.getElementById(
//           `synopsis-${project.project_id}`
//         ).innerText;
//         const updatedReview1 = document.getElementById(
//           `review1-${project.project_id}`
//         ).innerText;
//         const updatedReview2 = document.getElementById(
//           `review2-${project.project_id}`
//         ).innerText;
//         const updatedReview3 = document.getElementById(
//           `review3-${project.project_id}`
//         ).innerText;
//         const updatedFinal = document.getElementById(
//           `final-${project.project_id}`
//         ).innerText;

//         // Update the project object with the new values
//         const updatedProject = {
//           ...project,
//           synopsis: updatedSynopsis,
//           review1: updatedReview1,
//           review2: updatedReview2,
//           review3: updatedReview3,
//           final: updatedFinal,
//         };

//         // Send the updated project object to the server
//         const response = await axios.post(
//           "http://localhost:8800/api/savemarks",
//           { project: updatedProject },
//           { headers }
//         );

//         if (response) {
//           alert("Marks saved successfully");
//         }
//       } catch (error) {
//         console.error("Error saving marks:", error);
//         alert("Error saving marks. Please try again.");
//       }
//     },
//     [headers]
//   );

//   useEffect(() => {
//     fetchData();
//   }, [fetchData]);

//   return (
//     <div className="m-3">
//       <div className="m-5">
//         <Button variant="primary" onClick={fetchData}>
//           Refresh Data
//         </Button>
//       </div>
//       <Card>
//         <Card.Body>
//           <Form>
//             <Table striped bordered hover>
//               <thead>
//                 <tr>
//                   <th>PRN</th>
//                   <th>Student Name</th>
//                   <th>Title</th>
//                   <th>Synopsis</th>
//                   <th>Review 1</th>
//                   <th>Review 2</th>
//                   <th>Review 3</th>
//                   <th>Final</th>
//                   <th>Submit Marks</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {data.map((item) => (
//                   <tr key={item.project_id}>
//                     <td>{item.prn}</td>
//                     <td>{item.name}</td>
//                     <td>{item.title}</td>
//                     <td contentEditable id={`synopsis-${item.project_id}`}>
//                       {item.synopsis}
//                     </td>
//                     <td contentEditable id={`review1-${item.project_id}`}>
//                       {item.review1}
//                     </td>
//                     <td contentEditable id={`review2-${item.project_id}`}>
//                       {item.review2}
//                     </td>
//                     <td contentEditable id={`review3-${item.project_id}`}>
//                       {item.review3}
//                     </td>
//                     <td contentEditable id={`final-${item.project_id}`}>
//                       {item.final}
//                     </td>

//                     <td>
//                       <Button variant="primary" onClick={() => saveMarks(item)}>
//                         Save Marks
//                       </Button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </Table>
//           </Form>
//         </Card.Body>
//       </Card>
//     </div>
//   );
// };

// export default AllMarks;

import React, { useState, useEffect, useCallback } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import axios from "axios";

const AllMarks = () => {
  const [data, setData] = useState([]);
  const token = localStorage.getItem("token");
  const headers = {
    "Auth-token": token,
  };

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.post(
        "http://localhost:8800/api/getprojectmark",
        null,
        { headers }
      );

      if (response?.data) {
        setData(response.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  const saveMarks = useCallback(
    async (project) => {
      try {
        const updatedSynopsis = document.getElementById(
          `synopsis-${project.project_id}`
        ).innerText;
        const updatedReview1 = document.getElementById(
          `review1-${project.project_id}`
        ).innerText;
        const updatedReview2 = document.getElementById(
          `review2-${project.project_id}`
        ).innerText;
        const updatedReview3 = document.getElementById(
          `review3-${project.project_id}`
        ).innerText;
        const updatedFinal = document.getElementById(
          `final-${project.project_id}`
        ).innerText;

        const updatedProject = {
          ...project,
          synopsis: updatedSynopsis,
          review1: updatedReview1,
          review2: updatedReview2,
          review3: updatedReview3,
          final: updatedFinal,
        };

        const response = await axios.post(
          "http://localhost:8800/api/savemarks",
          { project: updatedProject },
          { headers }
        );

        if (response) {
          alert("Marks saved successfully");
        }
      } catch (error) {
        console.error("Error saving marks:", error);
        alert("Error saving marks. Please try again.");
      }
    },
    [headers]
  );

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Container className="mt-3">
      <h1 style={{ fontFamily: "Garamond, serif", fontWeight: "bold" }}>
        <u>
          <center>Project Evaluation</center>
        </u>
      </h1>

      <Button variant="primary" onClick={fetchData} className="mb-3">
        Refresh Data
      </Button>

      <Card>
        <Card.Body>
          <Form>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>PRN</th>
                  <th>Student Name</th>
                  <th>Title</th>
                  <th>Synopsis</th>
                  <th>Review 1</th>
                  <th>Review 2</th>
                  <th>Review 3</th>
                  <th>Final</th>
                  <th>Submit Marks</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.project_id}>
                    <td>{item.prn}</td>
                    <td>{item.name}</td>
                    <td>{item.title}</td>
                    <td contentEditable id={`synopsis-${item.project_id}`}>
                      {item.synopsis}
                    </td>
                    <td contentEditable id={`review1-${item.project_id}`}>
                      {item.review1}
                    </td>
                    <td contentEditable id={`review2-${item.project_id}`}>
                      {item.review2}
                    </td>
                    <td contentEditable id={`review3-${item.project_id}`}>
                      {item.review3}
                    </td>
                    <td contentEditable id={`final-${item.project_id}`}>
                      {item.final}
                    </td>

                    <td>
                      <Button
                        variant="primary"
                        onClick={() => saveMarks(item)}
                        style={{
                          width: "120px",
                          height: "25px",
                          fontSize: "12px",
                        }}
                      >
                        Save Marks
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

export default AllMarks;
