import {
    //PUT_ROOMS_DATA, 
    PUT_APPOINTMENT_TYPES,
    PUT_DOCTOR_DATA
} from '../constants';

import * as computationFunctions from './computation-functions';

const initialState = {
    data: {
        id: window.localStorage.getItem('id'),
        firstName: '',
        lastName: '',
        email: '',
        role: window.localStorage.getItem('role'),
    },
    rooms: [],
    appointmentTypes: [],
    doctors: []
};

const cAdminReducer = (state = initialState, { type, payload }) => {
    if (actionHandler.hasOwnProperty(type)) {
        return actionHandler[type](state, payload);
    }
    return state;
};

const actionHandler = {
    [PUT_DOCTOR_DATA]:computationFunctions.putDoctorData,
    //[PUT_ROOMS_DATA]: computationFunctions.putRoomsData,
    [PUT_APPOINTMENT_TYPES]:computationFunctions.putAppointmentTypes
};

export default cAdminReducer;