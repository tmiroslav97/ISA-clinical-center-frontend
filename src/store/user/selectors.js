const reducer = 'userReducer';

//user selectors
export const userDataSelector = state => state[reducer].data;
export const userTokenSelector = state => state[reducer].token;
//clinic center admin selector
export const regReqsDataSelector = state => state[reducer].reqs;
export const clinicsDataSelector = state => state[reducer].clinics;
export const medicineRecordSelector = state => state[reducer].medicineRecord;
export const medicineDataSelector = state => state[reducer].medicines;
export const diagnoseDataSelector = state => state[reducer].diagnoses;