import {
    FETCH_NURSE_DATA,
    PUT_NURSE_DATA,
    FETCH_PATIENTS,
    PUT_PATIENTS,
    ABS_HOL_REQUEST,
    PUT_ABS_HOL_REQUEST,
    FETCH_ABS_HOL_REQUEST,
    FETCH_RECEPIES,
    PUT_RECEPIES_DATA,
    REWRITE_RECEPIE,
    FETCH_PATIENTS_BY_CLINIC_ID,
    FETCH_CALENDAR,
    PUT_CALENDAR_DATA
} from './constants';

export const fetchCalendar = payload => ({
    type: FETCH_CALENDAR,
    payload
});

export const putCalendarData = payload => ({
    type: PUT_CALENDAR_DATA,
    payload
});

export const fetchPatientsByClinicId = payload => ({
    type: FETCH_PATIENTS_BY_CLINIC_ID,
    payload
});

export const fetchRecepies = payload => ({
    type: FETCH_RECEPIES,
    payload
});

export const putRecepiesData = payload => ({
    type: PUT_RECEPIES_DATA,
    payload
});

export const rewriteRecepie = payload => ({
    type: REWRITE_RECEPIE,
    payload
});

export const fetchAbsHolRequest = payload => ({
    type: FETCH_ABS_HOL_REQUEST,
    payload
});

export const absHolRequest = payload => ({
    type: ABS_HOL_REQUEST,
    payload
});

export const putAbsHolRequest = payload => ({
    type: PUT_ABS_HOL_REQUEST,
    payload
});

export const fetchNurseData = payload => ({
    type: FETCH_NURSE_DATA,
    payload
});

export const putNurseData = payload => ({
    type: PUT_NURSE_DATA,
    payload
});

export const fetchPatients = payload => ({
    type: FETCH_PATIENTS,
    payload
});

export const putPatients = payload => ({
    type: PUT_PATIENTS,
    payload
});