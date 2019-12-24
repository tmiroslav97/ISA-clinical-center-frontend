import React from 'react';
import { Row,  Tab,Nav,Col } from 'react-bootstrap';
import AddDiagnosis from './AddDiagnose';
import AddMedicine from './AddMedicine';

function Items(){
    return(
        <Tab.Container id="left-tabs">
            <Row>
                <Col md={2} xs={12}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Add medicine</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Add diagnose</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col md={10} xs={12}>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <AddMedicine/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <AddDiagnosis/>
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    );
}

export default Items;