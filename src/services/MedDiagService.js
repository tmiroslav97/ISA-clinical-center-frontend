import HttpClient from './HttpBaseClient';
import { history } from '../index';
import { format } from 'util';

const FINALPOINTS = {
    FETCH_MEDICINE_DATA: '/medic/all',
    FETCH_DIAGNOSE_DATA: '/diag/all'
};

class MedDiagService extends HttpClient {
    fetchMedicineData = async payload => {
        try {
            const { data } = await this.getApiClient().get(
                FINALPOINTS.FETCH_MEDICINE_DATA
            );

            const medicines = data;
            return { medicines };
        } catch (error) {
            console.log(error.response.data);
        }
    }

    fetchDiagnoseData = async payload => {
        try {
            const { data } = await this.getApiClient().get(
                FINALPOINTS.FETCH_DIAGNOSE_DATA
            );

            const diagnoses = data;

            return { diagnoses };
        } catch (error) {
            console.log(error.response.data);
        }
    }
}

export default new MedDiagService();