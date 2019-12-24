import { take, put, call } from 'redux-saga/effects';

import {
    FETCH_PATIENT_DATA,
    FETCH_DOCTORS_DATA_PATIENT,
    FETCH_CLINICS_DATA_PATIENT,
    SEARCH_CLINICS_DATA_PATIENT,
    SEARCH_DOCTORS_DATA_PATIENT
} from './constants';

import PatientService from '../../services/PatientService';

import {
    putPatientData,
    putDoctorsDataPatient,
    putClinicsDataPatient
} from './actions';

export function* fetchPatientData() {
    const { payload } = yield take(FETCH_PATIENT_DATA);
    const { data } = yield call(PatientService.fetchPatientData, payload);
    yield put(putPatientData(data));
}

export function* fetchDoctorsDataPatient() {
    const {payload} = yield take(FETCH_DOCTORS_DATA_PATIENT);
    const {doctors} = yield call(PatientService.fetchDoctorsDataPatient, payload);
    yield put(putDoctorsDataPatient(doctors));
}


export function* fetchClinicsDataPatient() {
    const {payload} = yield take(FETCH_CLINICS_DATA_PATIENT);
    const {clinics} = yield call(PatientService.fetchClinicsDataPatient, payload);
    yield put(putClinicsDataPatient(clinics));
}



export function* searchClinicsDataPatient() {
    const { payload } = yield take(SEARCH_CLINICS_DATA_PATIENT);
    const { data } = yield call(PatientService.searchClinicsDataPatient, payload);
    const { clinics } = yield call(PatientService.searchClinicsDataPatient, {});
    yield put(putClinicsDataPatient(clinics));
}



export function* searchDoctorsDataPatient() {
    const { payload } = yield take(SEARCH_DOCTORS_DATA_PATIENT);
    const { data } = yield call(PatientService.searchDoctorsDataPatient, payload);
    const { doctors } = yield call(PatientService.searchDoctorsDataPatient, {});
    yield put(putDoctorsDataPatient(doctors));
}

