import React from "react";
import { Button, Col, Modal, Row, Form } from "react-bootstrap";
import { AddStudent } from "@/services/StudentService";

export default function AddStudentModal(props) {

    const handleSubmit = (e) => {
        e.preventDefault();
        AddStudent(e.target)
            .then((result)=>{
                alert(result);
                props.setUpdated(true);
            },
            (error)=>{
                alert("Failed to Add")
            });
    };

    return(
        <div className="container">
            <Modal {...props}
            size="lg" aria-labelledby="contained-modal-title-vcenter" centered
            >
                <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Fill Informations
                </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Row>
                        <Col sm={6}>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="first_name">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter First Name" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="last_name">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Last Name" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="registration_number">
                                    <Form.Label>Registration Number</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Registration Number" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter Email" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="course">
                                    <Form.Label>Course</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Course" />
                                </Form.Group>

                                <Form.Group>
                                <Button variant="primary" type="submit">
                                    Save
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