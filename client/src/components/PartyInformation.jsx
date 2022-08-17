import { useState } from "react";
import { Card, ListGroup, Modal } from "react-bootstrap";
import CreateComplain from "./CreateComplain";

const FarmerInformation = ({ show, setShow, data, origin }) => {
    const [showComplain, setShowComplain] = useState(false);
    console.log(data);
    return (
        <Modal
            show={show} onHide={() => setShow(false)}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            {
                data &&
                <>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Information
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Card>
                            <Card.Body>
                                <Card.Title>{data.name}</Card.Title>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>{data.address}</ListGroup.Item>
                                <ListGroup.Item>{data.mobile}</ListGroup.Item>
                                <ListGroup.Item>{data.email}</ListGroup.Item>
                            </ListGroup>
                            {
                                origin !== "admin" &&
                                <Card.Body>
                                    <div className="d-flex justify-content-between">
                                        {/* <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link> */}
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
                            }
                        </Card>
                    </Modal.Body>
                </>
            }
            <Modal.Footer>
                <button className="btn btn-danger btn-sm" onClick={() => setShow(false)}>Close</button>
            </Modal.Footer>
        </Modal>
    )
}

export default FarmerInformation