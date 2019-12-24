import React from 'react';
import {Tab, Tabs} from 'react-bootstrap';
import History from './History';
import MedicalRecord from './MedicalRecord';
import Profile from './Profile';
import ClinicSearch from './ClinicSearch';
import DoctorSearch from './DoctorSearch';


function PatientHomePage(){
    return(
        <Tabs id="left-tabs-example" defaultActiveKey="first">
            <Tab eventKey="first" title="Search Clinics">
                <ClinicSearch/>
            </Tab>
            <Tab eventKey="second" title="Search Doctors">
                <DoctorSearch/>
            </Tab>
            <Tab eventKey="third" title="History">
                <History/>
            </Tab>
            <Tab eventKey="fourth" title="Medical Record">
                <MedicalRecord/>
            </Tab>
            <Tab eventKey="fifth" title="Profile">
                <Profile/>
            </Tab>
                    
        </Tabs>
    );
}
 
export default PatientHomePage;