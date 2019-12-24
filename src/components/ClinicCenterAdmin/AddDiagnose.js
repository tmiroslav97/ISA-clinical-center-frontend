import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addDiagnose, fetchDiagnoseData } from '../../store/user/actions';
import { diagnoseDataSelector } from '../../store/user/selectors';

function AddDiagnose(){
    const dispatch = useDispatch();
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [code, setCode] = useState();
    const diagnoses = useSelector(diagnoseDataSelector);

    const handleAddDiagnose = () => {
        dispatch(
            addDiagnose({
                code,
                name,
                description
            })
        );
    };

    useEffect(() => {
        dispatch(
            fetchDiagnoseData({})
        );
    }, []);

    return(
        <Container>
        <Row>
                <Col md={{ span: 10, offset: 1 }} xs={12}>
                    <h2 className="border-bottom">Add diagnose</h2>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 5, offset: 1 }} xs={12}>
                    <Form>
                        <Form.Group as={Col}>
                            <Form.Label>Code:</Form.Label>
                            <Form.Control type="text" placeholder="Enter diagnose code"
                                onChange={({ currentTarget }) => {
                                    setCode(currentTarget.value);
                                }}
                            />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Name:</Form.Label>
                            <Form.Control type="text" placeholder="Enter diagnose name"
                                onChange={({ currentTarget }) => {
                                    setName(currentTarget.value);
                                }}
                            />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Description:</Form.Label>
                            <Form.Control type="textarea" placeholder="Enter diagnose description"
                                onChange={({ currentTarget }) => {
                                    setDescription(currentTarget.value);
                                }}
                            />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Button variant="primary" onClick={handleAddDiagnose}>
                                Add diagnose
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
                                <th>Code</th>
                                <th>Name</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                diagnoses!=undefined &&
                                diagnoses.map((diagnose, index) => {
                                    return (
                                        <tr key={diagnose.id}>
                                            <td>{index + 1}</td>
                                            <td>{diagnose.code}</td>
                                            <td>{diagnose.name}</td>
                                            <td>{diagnose.description}</td>
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

export default AddDiagnose;