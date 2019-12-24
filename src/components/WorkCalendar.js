import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Spinner, Row, Col, Table, Button } from 'react-bootstrap';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment'
import { fetchCalendar } from '../store/nurse/actions';
import { calendarDataSelector } from '../store/nurse/selectors';

const localizer = momentLocalizer(moment)

const WorkCalendar = ({ personnelId, role }) => {
    const dispatch = useDispatch();
    const calendar = useSelector(calendarDataSelector);
    const [event, setEvent] = useState({
        title: '',
        type: '',
        start: '',
        end: ''
    });
    useEffect(() => {
        if (personnelId != null) {
            dispatch(
                fetchCalendar({
                    personnelId
                })
            );
        }
    }, [personnelId]);

    const handleCalendarClick = (calEvent) => {
        setEvent(calEvent);
    };

    return (
        <Container>
            <Row>
                <Col md={{ span: 10, offset: 1 }} xs={12}>
                    <h3 align="center" className="border-bottom">Work calendar</h3>
                </Col>

            </Row>
            <Row>
                <Col md={{ span: 10, offset: 1 }} xs={12}>
                    <Calendar
                        localizer={localizer}
                        events={calendar.calendarItemResponses}
                        startAccessor="start"
                        endAccessor="end"
                        style={{ height: 600 }}
                        onSelectEvent={(calEvent) => {
                            handleCalendarClick(calEvent);
                        }}
                    />
                </Col>
            </Row>
            {role === 'ROLE_DOCTOR' &&
                <Row>
                    <Col md={{ span: 10, offset: 1 }} xs={12}>
                        <h2 className="border-bottom">Selected event: </h2>
                    </Col>
                </Row>
            }
            {role === 'ROLE_DOCTOR' &&
                <Row>
                    <Col md={{ span: 10, offset: 1 }} xs={12}>
                        <Table responsive>
                            <tbody>
                                <tr>
                                    <th>Title</th>
                                    <td align="right">{event.title}</td>
                                </tr>
                                <tr>
                                    <th>Type</th>
                                    <td align="right">{event.type}</td>
                                </tr>
                                <tr>
                                    <th>Start date</th>
                                    <td align="right">{event.start}</td>
                                </tr>
                                <tr>
                                    <th>End date</th>
                                    <td align="right">{event.end}</td>
                                </tr>
                                {
                                    event.type === 'Appointment' &&
                                    <tr>
                                        <th>Start appointment</th>
                                        <td colSpan="2" align="right">
                                            <Button>Start</Button>
                                        </td>
                                    </tr>
                                }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            }
        </Container>
    );
}

export default WorkCalendar;