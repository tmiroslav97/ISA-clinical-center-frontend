import React,{useState, useEffect} from 'react';
import { Container, Row, Form, Col, Button, Table, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { doctorDataSelector } from '../../store/clinic_admin/selectors';
import { addDoctor } from '../../store/clinic_admin/actions';
import {fetchDoctorsData} from '../../store/clinic_admin/actions';

const DoctorAllAtOnce = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState();
    const [password1, setPassword1] = useState();
    const [password2, setPassword2] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [startTime, setStartTime] = useState();
    const [endTime, setEndTime] = useState();
    const doctors = useSelector(doctorDataSelector);

    const handleAddDoctor = () => {
        
        dispatch(
            addDoctor({
                email,
                password1,
                password2,
                firstName,
                lastName,
                startTime,
                endTime
            })
        );
        setShow(false);
    };
    const handleSearch = () => {
        dispatch(
           /* searchDoctorByName({
                name
            })*/
        );
    };
    const handleDeleteDoctor = () => {
        dispatch(
            /*deleteDoctor({
                id
            })*/
        );
    };
    useEffect(() => {
       dispatch(
            fetchDoctorsData({})
        );
    }, []);


    const [show, setShow] = useState(false);

   // const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
        <Modal show={show} onHide={handleAddDoctor} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Add data:</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} >
                            <Form.Label>E-mail address</Form.Label>
                            <Form.Control type="email" placeholder="E-mail" onChange={( { currentTarget } ) => {
                                    setEmail(currentTarget.value);
                            }}   />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password"  onChange={( { currentTarget } ) => {
                                    setPassword1(currentTarget.value);
                            }} />
                        </Form.Group>
                        <Form.Group as={Col} >
                            <Form.Label>Confirm password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm your password"  onChange={( { currentTarget } ) => {
                                    setPassword2(currentTarget.value);
                            }} />
                        </Form.Group>

                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>First name</Form.Label>
                            <Form.Control type="text" placeholder="First name" onChange={( { currentTarget } ) => {
                                    setFirstName(currentTarget.value);
                            }}  />
                        </Form.Group>
                        <Form.Group as={Col} >
                            <Form.Label>Last name</Form.Label>
                            <Form.Control type="text" placeholder="Last name"   onChange={( { currentTarget } ) => {
                                    setLastName(currentTarget.value);
                            }}/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Start time</Form.Label>
                            <Form.Control type="number" placeholder="Start time" onChange={( { currentTarget } ) => {
                                    setStartTime(currentTarget.value);
                            }}  />
                        </Form.Group>
                        <Form.Group as={Col} >
                            <Form.Label>End time</Form.Label>
                            <Form.Control type="number" placeholder="End time"   onChange={( { currentTarget } ) => {
                                    setEndTime(currentTarget.value);
                            }}/>
                        </Form.Group>
                    </Form.Row>
                    
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleAddDoctor} >
                    Add
                </Button>
            </Modal.Footer>
        </Modal>


        <Container>
            <Row>
                <Col md={{ span:10, offset:1  }} xs={12}>
                    <h3  className="border-bottom" >Doctors</h3>
                </Col>
            </Row>

            <Row>
                <Col md={{ span:5, offset:1  }} xs={12}>
                <Form>

                    <Form.Group as={Row} >

                        <Form.Label>Add new doctor:</Form.Label>
                        <Col>
                            <Button onClick={handleShow}>Add </Button>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} >

                        <Form.Label>Search doctors:</Form.Label>
                        <Col>
                            <Form.Control type="text" placeholder="Search by name" />
                        </Col>
                        <Col>
                            <Button>Search</Button>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formGridState">
                        <Form.Label>Filter data by:</Form.Label>
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
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                            {
                               doctors.map((doctor, index) => {
                                return (
                                    <tr key={doctor.id}>
                                        <td>{index + 1}</td>
                                        <td>{doctor.firstName}</td>
                                        <td>{doctor.lastName}</td>
                                        <td><Button variant="danger">Delete</Button></td>
                                        
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

export default DoctorAllAtOnce;