const reducer = 'nurseReducer';

export const nurseDataSelector = state => state[reducer].data;
export const patientsSelector = state => state[reducer].patients;
export const absHolRequestDataSelector = state => state[reducer].absholrequests;
export const recepiesDataSelector = state => state[reducer].recepies;
export const calendarDataSelector = state => state[reducer].calendar;