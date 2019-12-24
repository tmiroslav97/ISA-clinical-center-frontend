import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Table, Row, Col, Form, Container, FormControl } from 'react-bootstrap';
import { patientsSelector } from '../store/nurse/selectors';
import { fetchPatients, fetchPatientsByClinicId } from '../store/nurse/actions';

const PatientList = ({ clinicId }) => {
    const dispatch = useDispatch();
    const patients = useSelector(patientsSelector);

    useEffect(() => {
        if (clinicId != null) {
            dispatch(
                fetchPatientsByClinicId({clinicId})
            );
        }
    }, [clinicId]);

    return (
        <Container>
            <Row >
                <Col md={{ span: 10, offset: 1 }} xs={12}>
                    <h3 className="border-bottom">Patients list</h3>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 3, offset: 1 }} xs={12}>
                    <Form>
                        <Form.Group as={Col}>
                            <Form.Label>Sort by:</Form.Label>
                                <Form.Control as="select" >
                                    <option>Choose...</option>
                                    <option>Name A-Z</option>
                                    <option>Name Z-A</option>
                                    <option>UNOIP A-Z</option>
                                    <option>UNOIP Z-A</option>
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
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Address</th>
                                <th>City</th>
                                <th>Country</th>
                                <th>UNOIP</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                patients.map((patient, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{patient.firstName}</td>
                                            <td>{patient.lastName}</td>
                                            <td>{patient.email}</td>
                                            <td>{patient.phoneNum}</td>
                                            <td>{patient.address}</td>
                                            <td>{patient.city}</td>
                                            <td>{patient.country}</td>
                                            <td>{patient.unoip}</td>

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
export default PatientList;