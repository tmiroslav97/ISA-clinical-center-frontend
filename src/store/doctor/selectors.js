const reducer = 'doctorReducer';

export const doctorDataSelector = state => state[reducer].data;
export const doctorCalendarDataSelector = state => state[reducer].calendar;
