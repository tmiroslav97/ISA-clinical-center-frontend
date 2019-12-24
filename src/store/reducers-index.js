import { combineReducers } from 'redux';
import userReducer from './user/reducer';
import cAdminReducer from './clinic_admin/reducer';
import patientReducer from './patient/reducer';
import nurseReducer from './nurse/reducer';
import doctorReducer from './doctor/reducer';

const rootReducer = combineReducers({
   userReducer,
   cAdminReducer,
   patientReducer,
   nurseReducer,
   doctorReducer
});

  
export default (state, action) => {
    return rootReducer(state, action);
};