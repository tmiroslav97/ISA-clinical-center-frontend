export function putUserData(state, payload) {
    return {
        ...state,
        data: payload
    };
}
  
export function putUserToken(state, payload) {
    return {
        ...state,
        token: payload
    };
}

export function putRegReqsData(state, payload) {
    return {
        ...state,
        reqs: payload
    };
}

export function putClinicsData(state, payload) {
    return {
        ...state,
        clinics: payload
    };
}

export function putMedicineRecordData(state, payload) {
    return {
        ...state,
        medicineRecord: payload
    };
}

export function putMedicineData(state, payload) {
    return {
        ...state,
        medicines: payload
    };
}

export function putDiagnoseData(state, payload) {
    return {
        ...state,
        diagnoses: payload
    };
}