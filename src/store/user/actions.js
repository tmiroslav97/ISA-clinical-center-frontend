import {
    LOGIN,
    REGISTRATION,
    PUT_USER_DATA,
    PUT_USER_TOKEN,
    CHANGE_PASSWORD,
    SIGN_OUT,
    FETCH_CCADMIN_DATA,
    FETCH_REG_REQS_DATA,
    PUT_REG_REQS_DATA,
    APPROVE_REG_REQ,
    REJECT_REG_REQ,
    REG_CC_ADMIN,
    REG_CLINIC,
    FETCH_CLINICS_DATA,
    PUT_CLINICS_DATA,
    REG_CLINIC_ADMIN,
    ADD_MEDICINE,
    PUT_MEDICINE_RECORD,
    FETCH_MEDICINE_RECORD,
    ADD_DIAGNOSE,
    PUT_DIAGNOSE_DATA,
    PUT_MEDICINE_DATA,
    FETCH_MEDICINE_DATA,
    FETCH_DIAGNOSE_DATA
} from './constants';


//clinic center admin actions
export const fetchMedicineRecord = payload => ({
    type: FETCH_MEDICINE_RECORD,
    payload
});

export const addMedicine = payload => ({
    type: ADD_MEDICINE,
    payload
});

export const fetchMedicineData = payload => ({
    type: FETCH_MEDICINE_DATA,
    payload
});

export const putMedicineData = payload => ({
    type: PUT_MEDICINE_DATA,
    payload
});

export const addDiagnose = payload => ({
    type: ADD_DIAGNOSE,
    payload
});

export const putDiagnoseData = payload => ({
    type: PUT_DIAGNOSE_DATA,
    payload
});

export const fetchDiagnoseData = payload => ({
    type: FETCH_DIAGNOSE_DATA,
    payload
});

export const putMedicineRecord = payload => ({
    type: PUT_MEDICINE_RECORD,
    payload
});

export const regClinicAdmin = payload => ({
    type: REG_CLINIC_ADMIN,
    payload
});

export const putClinicsData = payload => ({
    type: PUT_CLINICS_DATA,
    payload
});

export const regClinic = payload => ({
    type: REG_CLINIC,
    payload
});

export const fetchClinicsData = payload => ({
    type: FETCH_CLINICS_DATA,
    payload
});


export const fetchCCAdminData = payload => ({
    type: FETCH_CCADMIN_DATA,
    payload
});

export const fetchRegReqsData = payload => ({
    type: FETCH_REG_REQS_DATA,
    payload
});

export const putRegReqsData = payload => ({
    type: PUT_REG_REQS_DATA,
    payload
});

export const approveRegReq = payload => ({
    type: APPROVE_REG_REQ,
    payload
});

export const rejectRegReq = payload => ({
    type: REJECT_REG_REQ,
    payload
});

export const regCCAdmin = payload => ({
    type: REG_CC_ADMIN,
    payload
});

//user actions
export const signOut = payload => ({
    type: SIGN_OUT,
    payload
});

export const loginUser = payload => ({
    type: LOGIN,
    payload
});

export const registerUser = payload => ({
    type: REGISTRATION,
    payload
});

export const putUserData = payload => ({
    type: PUT_USER_DATA,
    payload
});

export const putUserToken = payload => ({
    type: PUT_USER_TOKEN,
    payload
});

export const changePassword = payload => ({
    type: CHANGE_PASSWORD,
    payload
});

