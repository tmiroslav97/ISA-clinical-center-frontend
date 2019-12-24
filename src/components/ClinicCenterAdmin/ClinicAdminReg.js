import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { clinicsDataSelector } from '../../store/user/selectors';
import { regClinicAdmin } from '../../store/user/actions';

const ClinicAdminReg = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [clinicId, setClinicId] = useState();
    const clinics = useSelector(clinicsDataSelector);


    const handleRegClinicAdmin = () => {
        dispatch(
            regClinicAdmin({
                clinicId,
                email,
                password,
                firstName,
                lastName
            })
        );
    };

    return (
        <Container>
            <Row>
                <Col md={{ span: 10, offset: 1 }} xs={12}>
                    <h2 className="border-bottom">Registrating clinic admin</h2>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 10, offset: 1 }} xs={12}>
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>Admin e-mail:</Form.Label>
                                <Form.Control type="text" placeholder="Enter admin e-mail"
                                    onChange={({ currentTarget }) => {
                                        setEmail(currentTarget.value);
                                    }}
                                />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Admin password:</Form.Label>
                                <Form.Control type="password" placeholder="Enter admin password"
                                    onChange={({ currentTarget }) => {
                                        setPassword(currentTarget.value);
                                    }}
                                />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>First name:</Form.Label>
                                <Form.Control type="text" placeholder="Enter admin first name"
                                    onChange={({ currentTarget }) => {
                                        setFirstName(currentTarget.value);
                                    }}
                                />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Clinic:</Form.Label>
                                <Form.Control as="select" onChange={({ currentTarget }) => {
                                        setClinicId(currentTarget.value);
                                    }} >
                                    <option></option>
                                    {
                                        clinics!=undefined &&
                                        clinics.map((clinic, index) => {
                                            return (
                                                <option key={clinic.id} value={clinic.id}>{clinic.name}</option>
                                            );
                                        })
                                    }
                                </Form.Control>
                            </Form.Group> 
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} md="6">
                                <Form.Label>Last name:</Form.Label>
                                <Form.Control type="text" placeholder="Enter admin last name"
                                    onChange={({ currentTarget }) => {
                                        setLastName(currentTarget.value);
                                    }}
                                />
                            </Form.Group>
                        </Form.Row>
                        <Button variant="primary" onClick={handleRegClinicAdmin}>
                            Register
                        </Button>
                    </Form>
                </Col>
            </Row>
            
        </Container>
    );
}

export default ClinicAdminReg;