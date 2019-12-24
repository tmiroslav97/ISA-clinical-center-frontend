import React from 'react';
import {Table, Row, Col,  InputGroup, DropdownButton, Dropdown, Container, FormControl} from 'react-bootstrap';

function Clinics(){
    return(
        <Container>
            <Row >
                <Col md={{ span:12}} xs={12}>
                    <h3 className="border-bottom">Clinics list</h3>
                </Col>
            </Row>
            <Row>
            <Col md={{ span:8,offset:2}} xs={12}>
                <InputGroup>
                <FormControl
                placeholder="Sort clinics by"
                aria-describedby="basic-addon2"
                />
 
                <DropdownButton
                as={InputGroup.Append}
                variant="outline-secondary"
                title="Options"
                id="input-group-dropdown-2"
                >
                    <Dropdown.Item href="#">City</Dropdown.Item>
                    <Dropdown.Item href="#">Name</Dropdown.Item>
                </DropdownButton>
            </InputGroup>
            </Col>
            </Row>
            <Row>
            <Col md={{ span:8,offset:2}} xs={12}>
                <Table responsive>
                    <thead>
                        <tr>
                        <th>City</th>
                        <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>Beograd</td>
                        <td>Klinicki centar Srbije</td>
                        </tr>
                        <tr>
                        <td>Novi Sad</td>
                        <td>Klinicki centar Vojvodine</td>
                        </tr>
                        <tr>
                        <td>Bijeljina</td>
                        <td>S Medico</td>
                        </tr>
                    </tbody>
                </Table>
                </Col>
            </Row>
        
            
        </Container>

    );


}
export default Clinics;