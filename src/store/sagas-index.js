import { all, spawn, call, put } from 'redux-saga/effects';
import flatten from 'lodash/flatten';
import * as userSaga from './user/saga';
import * as cAdminSaga from './clinic_admin/saga';
import * as nurseSaga from './nurse/saga';
import * as patientSaga from './patient/saga';
import * as doctorSaga from './doctor/saga';

export default function* rootSaga() {
    let sagas = flatten(
        //za sad prazne uglaste tu stavljamo sve "sage"
        [ userSaga,patientSaga,nurseSaga,cAdminSaga, doctorSaga ].map(saga => Object.keys(saga).map(sagaFunctionName => saga[sagaFunctionName]))
    );
  
    yield all(
      sagas.map(saga =>
        spawn(function*() {
          while (true) {
            try {
              yield call(saga);
            } catch (e) {
              // ovo je za error, moze se otkomentarisati u deploymentu, ali treba napraviti u store za error
              //yield put(putError(e.message));
            }


        }
      })
    )
  );
}