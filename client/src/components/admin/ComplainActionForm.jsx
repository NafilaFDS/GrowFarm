import { useState } from "react";
import { Card, Form, Modal } from "react-bootstrap";

const ComplainActionForm = ({ show, setShow }) => {
    return (
        <Modal
            show={show} onHide={() => setShow(false)}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Complain Actions
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Card>
                    <Card.Body>
                        <Form>
                            <Form.Group className="mb-3">
                                <div className="form-label"></div>
                                <textarea className="form-control" placeholder="Response to whom have complained" name="" id="" cols="30" rows="10"></textarea>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <div className="form-label"></div>
                                <Form.Control type="text" placeholder="Notes" />
                            </Form.Group>
                            <button className="btn btn-sm btn-primary" type="submit">
                                Submit
                            </button>
                        </Form>
                    </Card.Body>
                </Card>
            </Modal.Body>
            <Modal.Footer>
                <button className="btn btn-danger btn-sm" onClick={() => setShow(false)}>Close</button>
            </Modal.Footer>
        </Modal>
    )
}

export default ComplainActionForm