import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { changePassword } from '../store/user/actions';


const PasswordChanger = () => {
    const dispatch = useDispatch();
    const [oldPassword, setOldPassword] = useState();
    const [newPassword, setNewPassword] = useState();
    const [confNewPassword, setConfNewPassword] = useState();

    const handleChange = () => {
        dispatch(
            changePassword({
                oldPassword,
                newPassword,
                confNewPassword
            })
        );
    };

    return (
        <Container>
            <Row>
                <Col md={{ span: 5, offset: 3 }} xs={12}>
                    <h1 align="center" className="border-bottom">Change password</h1>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 3, offset: 4 }} xs={12}>
                    <Form>
                        <Form.Group as={Col} controlId="formOld">
                            <div align="center">
                                <Form.Label>Old password:</Form.Label>
                            </div>
                            <Form.Control type="password" placeholder="Enter old password"
                                onChange={({ currentTarget }) => {
                                    setOldPassword(currentTarget.value);
                                }} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formNew">
                            <div align="center">
                                <Form.Label>New password:</Form.Label>
                            </div>
                            <Form.Control type="password" placeholder="Enter new password"
                                onChange={({ currentTarget }) => {
                                    setNewPassword(currentTarget.value);
                                }} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formConfNew">
                            <div align="center">
                                <Form.Label>Confirm new password:</Form.Label>
                            </div>
                            <Form.Control type="password" placeholder="Confirm new password"
                                onChange={({ currentTarget }) => {
                                    setConfNewPassword(currentTarget.value);
                                }} />
                        </Form.Group>
                        <div align="center">
                            <Button variant="primary" onClick={handleChange}>
                                Change
                        </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default PasswordChanger;