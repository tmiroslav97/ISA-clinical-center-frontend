import {
    PUT_PATIENT_DATA,
    PUT_DOCTORS_DATA_PATIENT,
    PUT_CLINICS_DATA_PATIENT
} from '../constants';

import * as computationFunctions from './computation-functions';


    const initialState = {
    data: {
        id: window.localStorage.getItem('id'),
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        country: '',
        city: '',
        phoneNum: '',
        unoip: '',
        role: window.localStorage.getItem('role'),

    },
    doctors:[],
    clinics:[]
};

const patientReducer = (state = initialState, { type, payload }) => {
    if (actionHandler.hasOwnProperty(type)) {
        return actionHandler[type](state, payload);
    }
    return state;
};

const actionHandler = {
    [PUT_PATIENT_DATA]: computationFunctions.putPatientData,
    [PUT_DOCTORS_DATA_PATIENT]: computationFunctions.putDoctorsDataPatient,
    [PUT_CLINICS_DATA_PATIENT]: computationFunctions.putClinicsDataPatient
};

export default patientReducer;