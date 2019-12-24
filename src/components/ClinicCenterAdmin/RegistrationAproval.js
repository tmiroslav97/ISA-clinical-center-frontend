import React, { useState, useEffect } from 'react';
import { Container, Row, Table, Button, Modal, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRegReqsData, approveRegReq, rejectRegReq } from '../../store/user/actions';
import { regReqsDataSelector } from '../../store/user/selectors';

const RegistrationAproval = () => {
    const [show, setShow] = useState(false);
    const [reqId, setReqId] = useState(0);
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();
    const regReqs = useSelector(regReqsDataSelector);

    useEffect(() => {       
        dispatch(
            fetchRegReqsData({})
        );
    }, []);


    const handleApprove = (regReqId) => {
        dispatch(
            approveRegReq({
                regReqId
            })
        );
    };

    const handleReject = () => {
        dispatch(
            rejectRegReq({
                reqId,
                message
            })
        );
    };

    const handleClose = () => setShow(false);
    const handleShow = (regReqId) => {
        setShow(true)
        setReqId(regReqId);
    };

    

    return (
        <div>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Rejected reason:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Control as="textarea" rows="4" id="reason" name="txtReason"
                        onChange={({ currentTarget }) => {
                            setMessage(currentTarget.value);
                        }}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => {handleReject(); handleClose()}}>
                        Send
                </Button>
                </Modal.Footer>
            </Modal>
        <Container>
            <Row>
                <h3>Approve or refuse registration requests</h3>
            </Row>
            <Row>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>E-mail</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Approve</th>
                            <th>Refuse</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            regReqs!=undefined &&
                            regReqs.map((req, index) => {
                                return (
                                    <tr key={req.id}>
                                        <td>{index + 1}</td>
                                        <td>{req.email}</td>
                                        <td>{req.firstName}</td>
                                        <td>{req.lastName}</td>
                                        <td>
                                            <Button variant="success" onClick={() => handleApprove(req.id)}>
                                                Approve
                                                </Button>
                                        </td>
                                        <td>
                                            <Button variant="danger" type="primary" onClick={() => handleShow(req.id)}>
                                                Refuse
                                                </Button>
                                        </td>
                                    </tr>
                                );
                            })
                            
                        }
                    </tbody>
                </Table>

            </Row>
        </Container>
        </div >
    );
}

export default RegistrationAproval;