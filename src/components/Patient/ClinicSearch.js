import React, { useEffect, useState } from 'react';
import useStateWithCallback from 'use-state-with-callback';
import { Container, Row, Col, Table, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { fetchClinicsDataPatient, searchClinicsDataPatient } from '../../store/patient/actions';
import { clinicsDataSelector } from '../../store/patient/selectors';

const ClinicSearch = () => {
    const dispatch = useDispatch();
    const clinics = useSelector(clinicsDataSelector);
    const [today, setToday] = useState(moment().format('YYYY-MM-DD'));
    const [date, setDate] = useState();
    const [type, setType] = useState();
    const [dateString, setDateString] = useStateWithCallback(moment().format('YYYY-MM-DD'), sdString => {
        setDate((new Date(sdString)).getTime() / 1000 | 0);

    });


    const handleSearch = () => {
        dispatch(
            searchClinicsDataPatient({
                date,
                type
            })
        );
    };

    useEffect(() => {
        dispatch(
            fetchClinicsDataPatient({})
        );
    }, []);


    return (
        <Container>
            <Row>
                <Col md={{ span: 10, offset: 1 }} xs={12}>
                    <h2 className="border-bottom">Clinics List</h2>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 3, offset: 1 }} xs={12}>
                    <Form>
                        <Form.Group as={Col}>
                            <Form.Label>Date:</Form.Label>
                            <Form.Control type="date" min={today} value={dateString} id="date1"
                                onChange={({ currentTarget }) => {
                                    setDateString(currentTarget.value);
                                }} />
                            <Form.Label>Type:</Form.Label>
                            <Form.Control as="select" onChange = {({ currentTarget }) => {
                                setType(currentTarget.value);
                            }} >
                                <option>Choose...</option>
                                <option>Tip1</option>
                                <option>Tip2</option>
                            </Form.Control>
                            <Button variant="primary" className="mt-2" onClick={handleSearch}>
                                Search
                            </Button>
                        </Form.Group>
                        <Form.Group as={Col} >
                            <Form.Label>Filter clinics by</Form.Label>

                            <Form.Control as="select">
                                <option>Choose...</option>
                                <option>Price</option>
                                <option>Rating</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} >
                            <Form.Label>Sort clinics by</Form.Label>
                            <Form.Control as="select">
                                <option>Choose...</option>
                                <option>Name A-Z</option>
                                <option>Name Z-A</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 10, offset: 1 }} xs={12}>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Average rating</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                /*
                                clinics.map((clinic, index) => {
                                    return (
                                        <tr key={clinic.id}>
                                            <td>{clinic.name}</td>
                                            <td>{clinic.address}</td>
                                            <td>{clinic.sumRating / clinic.cntRating}</td>
                                            <td>{clinic.priceList}</td>
                                        </tr>
                                    );
                                })
                                */
                            }
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )

}

export default ClinicSearch;