import HttpClient from './HttpBaseClient';
import { history } from '../index';
import { format } from 'util';

const FINALPOINTS = {
    FETCH_PATIENT_DATA: '/pat/%s',
    FETCH_DOCTORS_DATA_PATIENT: '/pat/doctors',
    FETCH_CLINICS_DATA_PATIENT: '/pat/clinics',
    SEARCH_DOCTORS_DATA_PATIENT: '/pat/search-doctors',
    SEARCH_CLINICS_DATA_PATIENT: '/pat/search-clinics',
    FETCH_PATIENTS: '/pat/all',
    FETCH_PATIENTS_BY_CLINIC_ID: '/pat/all/%s'
};

class PatientService extends HttpClient{

    fetchPatientsByClinicId = async payload => {
        try {
            console.log(payload);
            const { data } = await this.getApiClient().get(
                format(FINALPOINTS.FETCH_PATIENTS_BY_CLINIC_ID,payload.clinicId)
            );
            console.log(data);
            const patients = data;
            return { patients };
        } catch (error) {
            console.log(error.response.data);
        }
    };

    fetchDoctorsDataPatient = async payload => {
        try {
            const { data } = await this.getApiClient().get(
                FINALPOINTS.FETCH_DOCTORS_DATA_PATIENT
            );

            const doctors = data;

            return { doctors };
        } catch (error) {
            console.log(error.response.data);
        }
    };

    fetchClinicsDataPatient = async payload => {
        try {
            const { data } = await this.getApiClient().get(
                FINALPOINTS.FETCH_CLINICS_DATA_PATIENT
            );

            const clinics = data;

            return { clinics };
        } catch (error) {
            console.log(error.response.data);
        }
    };
    
    fetchPatientData = async payload => {
        try {
            const { data } = await this.getApiClient().get(
                FINALPOINTS.FETCH_PATIENT_DATA
            );

            const patients = data;
            return { patients };
        } catch (error) {
            console.log(error.response.data);
        }
    };

    searchClinicsDataPatient = async payload => {
        try {
            const { data } = await this.getApiClient().get(
                FINALPOINTS.SEARCH_CLINICS_DATA_PATIENT
            );

            const clinics = data;
            return { clinics };
        } catch (error) {
            console.log(error.response.data);
        }
    };

    searchDoctorsDataPatient = async payload => {
        try {
            const { data } = await this.getApiClient().get(
                FINALPOINTS.SEARCH_DOCTORS_DATA_PATIENT
            );

            const doctors = data;
            return { doctors };
        } catch (error) {
            console.log(error.response.data);
        }
    };

    
}

export default new PatientService();
