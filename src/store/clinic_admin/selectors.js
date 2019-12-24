const reducer = 'cAdminReducer';

export const cAdminSelector = state => state[reducer].adminC;
export const doctorDataSelector = state => state[reducer].doctors;
export const roomsDataSelector = state => state[reducer].rooms;
export const appointmentTypeSelector = state => state[reducer].appointmentTypes;