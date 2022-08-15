import { useState } from "react";
import { Card, ListGroup, Modal } from "react-bootstrap";
import CreateComplain from "./CreateComplain";

const FarmerInformation = ({ show, setShow }) => {
    const [showComplain, setShowComplain] = useState(false)
    return (
        <Modal
            show={show} onHide={() => setShow(false)}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Information
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Card>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <div className="d-flex justify-content-between">
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                            <button
                                className="btn btn-sm btn-danger"
                                onClick={() => setShowComplain(!showComplain)}
                            >
                                Complain
                            </button>
                        </div>
                        {showComplain &&
                            <CreateComplain />
                        }
                    </Card.Body>
                </Card>
            </Modal.Body>
            <Modal.Footer>
                <button className="btn btn-danger btn-sm" onClick={() => setShow(false)}>Close</button>
            </Modal.Footer>
        </Modal>
    )
}

export default FarmerInformation