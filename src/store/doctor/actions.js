import {
    FETCH_DOCTOR_DATA,
    PUT_DOCTOR_DATA,
    PUT_DOCTOR_CALENDAR_DATA,
    FETCH_DOCTOR_CALENDAR
} from './constants';

export const fetchDoctorCalendar = payload => ({
    type: FETCH_DOCTOR_CALENDAR,
    payload
});

export const putDoctorCalendarData = payload => ({
    type: PUT_DOCTOR_CALENDAR_DATA,
    payload
});

export const fetchDoctorData = payload => ({
    type: FETCH_DOCTOR_DATA,
    payload
});

export const putDoctorData = payload => ({
    type: PUT_DOCTOR_DATA,
    payload
});