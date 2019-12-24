import {
    PUT_DOCTOR_DATA,
    PUT_DOCTOR_CALENDAR_DATA
} from '../constants';

import * as computationFunctions from './computation-functions';

const initialState = {
    data: {
        id: window.localStorage.getItem('id'),
        firstName: '',
        lastName: '',
        email: '',
        role: window.localStorage.getItem('role'),
        clinicId: null
    },
    patients: [],
    absholrequests: [],
    recepies: [],
    calendar: {
        id: '',
        calendarItemResponses: []
    }
};

const doctorReducer = (state = initialState, { type, payload }) => {
    if (actionHandler.hasOwnProperty(type)) {
        return actionHandler[type](state, payload);
    }
    return state;
};

const actionHandler = {
    [PUT_DOCTOR_DATA]: computationFunctions.putDoctorData,
    [PUT_DOCTOR_CALENDAR_DATA]: computationFunctions.putDoctorCalendarData
};

export default doctorReducer;