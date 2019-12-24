import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addMedicine, fetchMedicineData } from '../../store/user/actions';
import { medicineDataSelector } from '../../store/user/selectors';


function AddMedicine() {
    const dispatch = useDispatch();
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [code, setCode] = useState();
    const medicines = useSelector(medicineDataSelector);

    const handleAddMedicine = () => {
        dispatch(
            addMedicine({
                code,
                name,
                description
            })
        );
    };

    useEffect(() => {
        dispatch(
            fetchMedicineData({})
        );
    }, []);

    return (
        <Container>
            <Row>
                <Col md={{ span: 10, offset: 1 }} xs={12}>
                    <h2 className="border-bottom">Add medicine</h2>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 5, offset: 1 }} xs={12}>
                    <Form>
                        <Form.Group as={Col}>
                            <Form.Label>Code:</Form.Label>
                            <Form.Control type="text" placeholder="Enter medicine code"
                                onChange={({ currentTarget }) => {
                                    setCode(currentTarget.value);
                                }}
                            />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Name::</Form.Label>
                            <Form.Control type="text" placeholder="Enter medicine name"
                                onChange={({ currentTarget }) => {
                                    setName(currentTarget.value);
                                }}
                            />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Description:</Form.Label>
                            <Form.Control type="textarea" placeholder="Enter medicine description"
                                onChange={({ currentTarget }) => {
                                    setDescription(currentTarget.value);
                                }}
                            />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Button variant="primary" onClick={handleAddMedicine}>
                                Add medicine
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
                                medicines!=undefined &&
                                medicines.map((medicine, index) => {
                                    return (
                                        <tr key={medicine.id}>
                                            <td>{index + 1}</td>
                                            <td>{medicine.code}</td>
                                            <td>{medicine.name}</td>
                                            <td>{medicine.description}</td>
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

export default AddMedicine;