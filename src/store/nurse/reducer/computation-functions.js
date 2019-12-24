export function putNurseData(state, payload) {
    return {
        ...state,
        data: payload
    };
}

export function putPatients(state, payload) {
    return {
        ...state,
        patients: payload
    };
}

export function putAbsHolRequest(state, payload) {
    return {
        ...state,
        absholrequests: payload
    };
}

export function putRecepiesData(state, payload) {
    return {
        ...state,
        recepies: payload
    };
}

export function putCalendarData(state, payload) {
    return {
        ...state,
        calendar: payload
    };
}