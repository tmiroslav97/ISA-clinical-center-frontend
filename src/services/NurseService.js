import HttpClient from './HttpBaseClient';
import { history } from '../index';
import { format } from 'util';

const FINALPOINTS = {
    FETCH_NURSE_DATA: '/nurse/%s',
    FETCH_RECEPIES: '/nurse/recepies',
    REWRITE_RECEPIE: '/nurse/rewrite/%s/%s'
};

class NurseService extends HttpClient {
    fetchNurseData = async payload => {
        try {
            const { data } = await this.getApiClient().get(
                format(FINALPOINTS.FETCH_NURSE_DATA, payload.id)
            );

            return { data };
        } catch (error) {
            console.log(error.response.data);
        }
    }

    fetchRecepies = async payload => {
        try {
            const { data } = await this.getApiClient().get(
                FINALPOINTS.FETCH_RECEPIES
            );

            const recepies = data;
            return { recepies };
        } catch (error) {
            console.log(error.response.data);
        }
    }

    rewriteRecepie = async payload => {
        try {
            const { data } = await this.getApiClient().post(
                format(FINALPOINTS.REWRITE_RECEPIE, payload.nurseId, payload.recepieId)
            );

            return { data };
        } catch (error) {
            console.log(error.response.data);
        }
    }

}

export default new NurseService();
