import {
    PUT_USER_DATA,
    PUT_USER_TOKEN,
    PUT_CCADMIN_DATA,
    PUT_REG_REQS_DATA,
    PUT_CLINICS_DATA,
    PUT_MEDICINE_RECORD,
    PUT_MEDICINE_DATA,
    PUT_DIAGNOSE_DATA
} from '../constants';

import * as computationFunctions from './computation-functions';

const initialState = {
    data:{
        id: window.localStorage.getItem('id'),
        firstName: '',
        lastName: '',
        email: '',
        firstLog: true,
        role: localStorage.getItem('role')
    },
    token: window.localStorage.getItem('token')
};

const userReducer = (state = initialState, { type, payload })=>{
    if(actionHandler.hasOwnProperty(type)){
        return actionHandler[type](state,payload);
    }
    return state;
};

const actionHandler = {
    [PUT_USER_DATA]: computationFunctions.putUserData,
    [PUT_USER_TOKEN]: computationFunctions.putUserToken,
    [PUT_REG_REQS_DATA]: computationFunctions.putRegReqsData,
    [PUT_CLINICS_DATA]: computationFunctions.putClinicsData,
    [PUT_MEDICINE_RECORD]: computationFunctions.putMedicineRecordData,
    [PUT_MEDICINE_DATA]: computationFunctions.putMedicineData,
    [PUT_DIAGNOSE_DATA]: computationFunctions.putDiagnoseData
  };

export default userReducer;