import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNurseData } from '../store/nurse/actions';
import { Tabs, Tab } from 'react-bootstrap';
import UserProfile from '../components/UserProfile';
import PatientList from '../components/PatientList';
import WorkCalendar from '../components/WorkCalendar';
import HolAbsRequest from '../components/HolAbsRequest';
import BookingDoc from '../components/BookingDoc';
import ApointmentInfo from '../components/ApointmentInfo';
import RewriteRecepie from '../components/RewriteRecepie';
import { nurseDataSelector } from '../store/nurse/selectors';

const NurseHomePage = ({ match }) => {
    const dispatch = useDispatch();
    const id = match.params.id;
    const data = useSelector(nurseDataSelector);

    useEffect(() => {
        dispatch(
            fetchNurseData({
                id
            })
        );
    }, []);

    return (
        <Tabs id="left-tabs-doc-home" >
            <Tab eventKey="zero" title="Patients list">
                <PatientList clinicId={data.clinicId}/>
            </Tab>
            <Tab eventKey="second" title="Holiday/absence requests">
                <HolAbsRequest personnelId={data.id} clinicId={data.clinicId} />
            </Tab>
            <Tab eventKey="third" title="Perscriptions">
                <RewriteRecepie nurseId={data.id} />
            </Tab>
            <Tab eventKey="fourth" title="WorkCalendar">
                <WorkCalendar personnelId={data.id} role={data.role} />
            </Tab>
            <Tab eventKey="fifth" title=" User Profile">
                <UserProfile data={data} />
            </Tab>
        </Tabs>
    );
}

export default NurseHomePage;