import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; import { Tabs, Tab } from 'react-bootstrap';
import UserProfile from '../components/UserProfile';
import PatientList from '../components/PatientList';
import WorkCalendar from '../components/WorkCalendar';
import HolAbsRequest from '../components/HolAbsRequest';
import BookingDoc from '../components/BookingDoc';
import ApointmentInfo from '../components/ApointmentInfo';
import { doctorDataSelector } from '../store/doctor/selectors';
import { fetchDoctorData } from '../store/doctor/actions';

const DoctorHomePage = ({ match }) => {
    const dispatch = useDispatch();
    const id = match.params.id;
    const data = useSelector(doctorDataSelector);
    console.log(data);
    useEffect(() => {
        dispatch(
            fetchDoctorData({
                id
            })
        );
    }, [id]);

    return (
        <Tabs id="left-tabs-doc-home" >
            <Tab eventKey="zero" title="Patients list">
                <PatientList clinicId={data.clinicId} />
            </Tab>
            <Tab eventKey="first" title="ApointmentInfo">
                <ApointmentInfo />
            </Tab>
            <Tab eventKey="second" title="WorkCalendar">
                <WorkCalendar personnelId={data.id} role={data.role}/>
            </Tab>
            <Tab eventKey="third" title="Holiday/absence requests">
                <HolAbsRequest />
            </Tab>
            <Tab eventKey="fourth" title="Booking">
                <BookingDoc />
            </Tab>
            <Tab eventKey="fifth" title=" User Profile">
                <UserProfile data={data} />
            </Tab>
        </Tabs>
    );
}

export default DoctorHomePage;