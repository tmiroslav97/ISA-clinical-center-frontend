const reducer = 'patientReducer';

export const patientDataSelector = state => state[reducer].data;
export const doctorsDataSelector = state => state[reducer].doctors;
export const clinicsDataSelector = state => state[reducer].clinics;