export function putDoctorData(state, payload) {
    return {
        ...state,
        data: payload
    };
}

export function putDoctorCalendarData(state, payload) {
    return {
        ...state,
        calendar: payload
    };
}