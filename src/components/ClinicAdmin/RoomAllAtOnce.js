import React, { useState, useEffect } from 'react';
import { Container, Row, Table, Button, Col, Form, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { roomsDataSelector } from '../../store/clinic_admin/selectors'
import { fetchRoomsData } from '../../store/clinic_admin/actions';

const RoomAllAtOnce = () => {
    const dispatch = useDispatch();
    const rooms = useSelector(roomsDataSelector);

    const handleDelitingRooms = () => {
        dispatch(

        );
    };

    /*
    useEffect(() => {
        dispatch(
            fetchRoomsData({})
        );
    }, []);
    */

    const [show1rEdit, setShow1rEdit] = useState(false);
    const [show2rAdd, setShow2rAdd] = useState(false);

    const handleClose1rEdit = () => setShow1rEdit(false);
    const handleShow1rEdit = () => setShow1rEdit(true);
    const handleClose2rAdd = () => setShow2rAdd(false);
    const handleShow2rAdd = () => setShow2rAdd(true);

    return (
        <>
            <Modal show={show1rEdit} onHide={handleClose1rEdit} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit data:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group as={Row}>
                            <Form.Label>Enter name of the room:</Form.Label>
                            <Col>
                                <Form.Control type="text" placeholder="Name " />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label>Enter number of the room:</Form.Label>
                            <Col>
                                <Form.Control type="text" placeholder="Number " />
                            </Col>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose1rEdit}>
                        Edit
          </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={show2rAdd} onHide={handleClose2rAdd} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Add data:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group as={Row}>
                            <Form.Label>Enter name of the room:</Form.Label>
                            <Col>
                                <Form.Control type="text" placeholder="Name " />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label>Enter number of the room:</Form.Label>
                            <Col>
                                <Form.Control type="text" placeholder="Number " />
                            </Col>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose2rAdd}>
                        Add
          </Button>
                </Modal.Footer>
            </Modal>
            <Container>
                <Row>
                <Col md={{ span:10, offset:1  }} xs={12}>
                    <h3  className="border-bottom">Examination and surgery rooms</h3>
                    </Col>
                </Row>
                <Row>
                <Col md={{ span:10, offset:1  }} xs={12}>
                    <Form>

                        <Form.Group as={Row} >

                            <Form.Label>Add new surgery room:</Form.Label>
                            <Col>
                                <Button onClick={handleShow2rAdd}>Add </Button>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} >

                            <Form.Label>Search surgery rooms:</Form.Label>
                            <Col>
                                <Form.Control type="text" placeholder="Search " />
                            </Col>
                            <Col>
                                <Button>Search</Button>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formGridState">
                            <Form.Label>Filter data by</Form.Label>
                            <Col>
                                <Form.Control as="select">
                                    <option>Choose...</option>
                                    <option>...</option>
                                </Form.Control>
                            </Col>
                        </Form.Group>


                    </Form>
                </Col>
                </Row>
                <Row>
                <Col md={{ span:10, offset:1  }} xs={12}>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Number</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                rooms.map((room, index) => {
                                    return (
                                        <tr key={room.id}>
                                            <td>{room.name}</td>
                                            <td>{room.number}</td>
                                            <td>
                                                <Button onClick={handleShow1rEdit}>Edit</Button>
                                            </td>
                                            <td>
                                                <Button onClick={handleDelitingRooms}>Delete</Button>
                                            </td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </Table>
                    </Col>
                </Row>
            </Container >
        </>
    );
}


export default RoomAllAtOnce;