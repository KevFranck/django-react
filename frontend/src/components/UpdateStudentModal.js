import React from "react";
import { Button, Col, Modal, Row, Form } from "react-bootstrap";
import { updateStudent } from "@/services/StudentService";

export default function UpdateStudentModal(props) {

    const handleSubmit = (e) => {
        e.preventDefault();
        updateStudent(props.student.student_id, e.target)
            .then((result)=>{
                alert(result);
                props.setUpdated(true);
            },
            (error)=>{
                alert("Failed to Update")
            });
    };

    return(
        <div className="container">
            <Modal {...props}
            size="lg" aria-labelledby="contained-modal-title-vcenter" centered
            >
                <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Fill Update Informations
                </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Row>
                        <Col sm={6}>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="first_name">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" name="first_name" defaultValue={props.student.first_name} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="last_name">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" name="last_name" defaultValue={props.student.last_name}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="registration_number">
                                    <Form.Label>Registration Number</Form.Label>
                                    <Form.Control type="text" name="registration_number" defaultValue={props.student.registration_number} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" name="email" defaultValue={props.student.email} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="course">
                                    <Form.Label>Course</Form.Label>
                                    <Form.Control type="text" name="course" defaultValue={props.student.course} />
                                </Form.Group>

                                <Form.Group>
                                <Button variant="info" type="submit">
                                    Update
                                </Button>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Modal.Body>

                <Modal.Footer>
                <Button variant="danger" type="submit" onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}