import HttpClient from './HttpBaseClient';
import { history } from '../index';
import { format } from 'util';

const FINALPOINTS = {
    FETCH_CCADMIN_DATA: '/cca/%s',
    FETCH_REG_REQS_DATA: '/cca/regreqs',
    APPROVE_REG_REQ: '/cca/approve/%s',
    REJECT_REG_REQ: '/cca/reject/%s/%s',
    REG_CC_ADMIN: '/cca/reg-cca/%s',
    REG_CLINIC: '/cca/reg-clinic',
    FETCH_CLINICS: '/cca/clinics',
    REG_CLINIC_ADMIN: '/cca/reg-clinic-admin',
    ADD_MEDICINE: '/cca/add-medicine',
    ADD_DIAGNOSE: '/cca/add-diagnose',
};

class CCAdminService extends HttpClient {

    fetchCCAdminData = async payload => {
        try {
            const { data } = await this.getApiClient().get(
                format(FINALPOINTS.FETCH_CCADMIN_DATA, payload.ccAdminId)
            );
            return { data };
        } catch (error) {
            console.log(error.response.data);
        }
    };

    fetchRegReqsData = async payload => {
        try {
            const { data } = await this.getApiClient().get(
                FINALPOINTS.FETCH_REG_REQS_DATA
            );
            const reqData = data;
            return { reqData };
        } catch (error) {
            console.log(error.response.data);
        }
    };

    approveRegReq = async payload => {
        try {
            const { data } = await this.getApiClient().post(
                format(FINALPOINTS.APPROVE_REG_REQ, payload.regReqId)
            );

            return { data };
        } catch (error) {
            console.log(error.response.data);
        }
    };

    rejectRegReq = async payload => {
        try {
            const { data } = await this.getApiClient().post(format(FINALPOINTS.REJECT_REG_REQ, payload.reqId, payload.message));

            return { data };

        } catch (error) {
            console.log(error.response.data);
        }
    };

    regCCAdmin = async payload => {
        try {
            const { data } = await this.getApiClient().post(
                format(FINALPOINTS.REG_CC_ADMIN, payload.ccaId),
                payload
            );

            return (data);
        } catch (error) {
            console.log(error.response.data);
        }
    };

    regClinic = async payload => {
        try {
            const { data } = await this.getApiClient().post(
                FINALPOINTS.REG_CLINIC,
                payload
            );

            return { data };
        } catch (error) {
            console.log(error.response.data);
            alert(error.response.data);
        }
    };

    fetchClinicsData = async payload => {
        try {
            const { data } = await this.getApiClient().get(
                FINALPOINTS.FETCH_CLINICS
            );

            const clinics = data;

            return { clinics };
        } catch (error) {
            console.log(error.response.data);
        }
    };

    regClinicAdmin = async payload => {
        try {
            const { data } = await this.getApiClient().post(
                FINALPOINTS.REG_CLINIC_ADMIN,
                payload
            );

            return { data };
        } catch (error) {
            console.log(error.response.data);
        }
    };

    addMedicine = async payload => {
        try {
            const { data } = await this.getApiClient().post(
                FINALPOINTS.ADD_MEDICINE,
                payload
            );

            return { data };
        } catch (error) {
            console.log(error.response.data);
        }
    };

    addDiagnose = async payload => {
        try {
            const { data } = await this.getApiClient().post(
                FINALPOINTS.ADD_DIAGNOSE,
                payload
            );

            return { data };
        } catch (error) {
            console.log(error.response.data);
        }
    };

}

export default new CCAdminService();