import {
    PUT_PATIENT_DATA,
    FETCH_PATIENT_DATA,
    PUT_DOCTORS_DATA_PATIENT,
    FETCH_DOCTORS_DATA_PATIENT,
    PUT_CLINICS_DATA_PATIENT,
    FETCH_CLINICS_DATA_PATIENT,
    SEARCH_DOCTORS_DATA_PATIENT,
    SEARCH_CLINICS_DATA_PATIENT
} from './constants';
    
export const putPatientData = payload => ({
    type: PUT_PATIENT_DATA,
    payload
});

export const fetchPatientData = payload => ({
    type: FETCH_PATIENT_DATA,
    payload
});

export const putDoctorsDataPatient = payload => ({
    type: PUT_DOCTORS_DATA_PATIENT,
    payload
});

export const fetchDoctorsDataPatient = payload => ({
    type: FETCH_DOCTORS_DATA_PATIENT,
    payload
});

export const putClinicsDataPatient = payload => ({
    type: PUT_CLINICS_DATA_PATIENT,
    payload
}); 

export const fetchClinicsDataPatient = payload => ({
    type: FETCH_CLINICS_DATA_PATIENT,
    payload
});

export const searchDoctorsDataPatient = payload => ({
    type: SEARCH_DOCTORS_DATA_PATIENT,
    payload
});

export const searchClinicsDataPatient = payload => ({
    type: SEARCH_CLINICS_DATA_PATIENT,
    payload
});

