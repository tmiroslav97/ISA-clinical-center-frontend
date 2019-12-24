import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { clinicsDataSelector } from '../../store/user/selectors';
import { regClinic, fetchClinicsData } from '../../store/user/actions';


const ClinicReg = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [address, setAddress] = useState();
    const clinics = useSelector(clinicsDataSelector);

    const handleClinicReg = () => {
        dispatch(
            regClinic({
                name,
                description,
                address
            })
        );
    };

    useEffect(() => {
        dispatch(
            fetchClinicsData({})
        );
    }, []);
    return (
        <Container>
            <Row>
                <Col md={{ span: 10, offset: 1 }} xs={12}>
                    <h2 className="border-bottom">Registrating clinic</h2>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 5, offset: 1 }} xs={12}>
                    <Form>
                        <Form.Group as={Col}>
                            <Form.Label>Clinic name:</Form.Label>
                            <Form.Control type="text" placeholder="Enter clinic name"
                                onChange={({ currentTarget }) => {
                                    setName(currentTarget.value);
                                }}
                            />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Clinic description:</Form.Label>
                            <Form.Control type="textarea" placeholder="Enter clinic description"
                                onChange={({ currentTarget }) => {
                                    setDescription(currentTarget.value);
                                }}
                            />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Clinic address:</Form.Label>
                            <Form.Control type="text" placeholder="Enter clinic address"
                                onChange={({ currentTarget }) => {
                                    setAddress(currentTarget.value);
                                }}
                            />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Button variant="primary" onClick={handleClinicReg}>
                                Register
                            </Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 10, offset: 1 }} xs={12}>
                    <h3>Clinics list</h3>
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
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                clinics!=undefined &&
                                clinics.map((clinic, index) => {
                                    return (
                                        <tr key={clinic.id}>
                                            <td>{index + 1}</td>
                                            <td>{clinic.name}</td>
                                            <td>{clinic.address}</td>
                                            <td>{clinic.description}</td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
}

export default ClinicReg;