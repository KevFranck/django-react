import React,{useState, useEffect} from "react";
import { Table, Button, ButtonToolbar } from "react-bootstrap";
import { getStudents } from "@/services/StudentService";
import AddStudentModal from "./AddStudentModal";
import UpdateStudentModal from "./UpdateStudentModal";
import { deleteStudent } from "@/services/StudentService";


export default function Manage(){
    const [students, setStudents] = useState([]);
    const [addModalShow, setAddModalShow] = useState(false);
    const [editModalShow, setEditModalShow] = useState(false);
    const [editStudent, setEditStudent] = useState([]);
    const [isUpdated, setIsUpdated] = useState(false);

    useEffect(() => {
      let mounted = true;
      if(students.length && !isUpdated){
        return;
      }
      getStudents()
        .then(data => {
          if(mounted){
            setStudents(data)
          }
        })
        return () => {
            mounted = false;
            setIsUpdated(false)
        }
    }, [isUpdated, students])

    const handleAdd = (e) => {
        e.preventDefault();
        setAddModalShow(true)
    };

    const handleUpdate = (e, student) => {
        e.preventDefault();
        setEditModalShow(true);
        setEditStudent(student);
    };

    const handleDelete = (e, student_id) => {
        if(window.confirm('Are you sure?')){
            e.preventDefault();
            deleteStudent(student_id)
                .then((result)=>{
                    alert(result);
                    setIsUpdated(true);
                },
                (error)=>{
                    alert('Failed to delete');
                })
        }
    };


    let AddModalClose = () => setAddModalShow(false);
    let EditModalClose = () => setEditModalShow(false);

    return (
        <div className="row">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Registration Number</th>
              <th>Email</th>
              <th>Course</th>
              <th>Action</th>
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
                    <td>
                        <Button className="mr-2" variant="info" onClick={event => handleUpdate(event, student)}>Edit</Button>{' '}
                        <UpdateStudentModal show={editModalShow} onHide={EditModalClose} student={editStudent} setUpdated={setIsUpdated}></UpdateStudentModal>
                        <Button className="mr-2" variant="danger" onClick={event => handleDelete(event, student.student_id)}>Delete</Button>{' '}
                    </td>
                </tr>
            )}
            
          </tbody>
        </Table>
        <ButtonToolbar>
        <Button variant="primary" onClick={handleAdd}>Add Student</Button>{' '}
        <AddStudentModal show={addModalShow} onHide={AddModalClose} setUpdated={setIsUpdated}></AddStudentModal>
        </ButtonToolbar>
        </div>
      );
}