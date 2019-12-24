import { take, put, call } from 'redux-saga/effects';

import {
    FETCH_NURSE_DATA,
    FETCH_PATIENTS,
    ABS_HOL_REQUEST,
    FETCH_ABS_HOL_REQUEST,
    FETCH_RECEPIES,
    REWRITE_RECEPIE,
    FETCH_PATIENTS_BY_CLINIC_ID,
    FETCH_CALENDAR,
} from './constants';

import PatientService from '../../services/PatientService';
import NurseService from '../../services/NurseService';
import PersonnelService from '../../services/PersonnelService';

import {
    putNurseData,
    putPatients,
    putAbsHolRequest,
    putRecepiesData,
    putCalendarData
} from './actions';

export function* fetchCalendar() {
    const { payload } = yield take(FETCH_CALENDAR);
    const { calendar } = yield call(PersonnelService.fetchCalendar, payload);
    
    yield put(putCalendarData(calendar));
}

export function* rewriteRecepie() {
    const { payload } = yield take(REWRITE_RECEPIE);
    const { data } = yield call(NurseService.rewriteRecepie, payload);
    const { recepies } = yield call(NurseService.fetchRecepies, {});
    yield put(putRecepiesData(recepies));
}


export function* fetchRecepies() {
    const { payload } = yield take(FETCH_RECEPIES);
    const { recepies } = yield call(NurseService.fetchRecepies, payload);
    yield put(putRecepiesData(recepies));
}

export function* fetchAbsHolRequest() {
    const { payload } = yield take(FETCH_ABS_HOL_REQUEST);
    const { absholrequests } = yield call(PersonnelService.fetchAbsHolRequests, payload);
    yield put(putAbsHolRequest(absholrequests));
}

export function* absHolRequest() {
    const { payload } = yield take(ABS_HOL_REQUEST);
    const { data } = yield call(PersonnelService.absHolRequest, payload);
    const { absholrequests } = yield call(PersonnelService.fetchAbsHolRequests, payload);
    yield put(putAbsHolRequest(absholrequests));
}

export function* fetchNurseData() {
    const { payload } = yield take(FETCH_NURSE_DATA);
    const { data } = yield call(NurseService.fetchNurseData, payload);
    yield put(putNurseData(data));
}

export function* fetchPatients() {
    const { payload } = yield take(FETCH_PATIENTS_BY_CLINIC_ID);
    const { patients } = yield call(PatientService.fetchPatientsByClinicId, payload);
    yield put(putPatients(patients));
}