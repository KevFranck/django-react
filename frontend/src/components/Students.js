import { getStudents } from "@/services/StudentService";
import React, {useEffect, useState} from "react";
import { Table } from "react-bootstrap";

export default function Students(){
    const [students, setStudents] = useState([]);

    useEffect(() => {
      let mounted = true;
      getStudents()
        .then(data => {
          if(mounted){
            setStudents(data)
          }
        })
        return () => mounted = false
    }, [])

    return (
        <div className="row">
          <h1>we have {students.length} students</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Registration Number</th>
              <th>Email</th>
              <th>Course</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) =>
                <tr key={student.student_id}>
                    <td>{student.student_id}</td>
                    <td>{student.first_name}</td>
                    <td>{student.last_name}</td>
                    <td>{student.registration_number}</td>
                    <td>{student.email}</td>
                    <td>{student.course}</td>
                </tr>
            )}
            
          </tbody>
        </Table>
        </div>
      );
}