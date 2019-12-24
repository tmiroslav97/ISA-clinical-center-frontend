import HttpClient from './HttpBaseClient';
import { history } from '../index';
import { format } from 'util';

const FINALPOINTS = {
    ABS_HOL_REQUEST: '/personnel/abs-hol',
    FETCH_ABS_HOL_REQUEST: '/personnel/my-abs-hol/%s',
    FETCH_CALENDAR: '/personnel/my-cal/%s'
};

class PersonnelService extends HttpClient {
    absHolRequest = async payload => {
        try {
            const { data } = await this.getApiClient().post(
                FINALPOINTS.ABS_HOL_REQUEST,
                payload
            );

            return { data };
        } catch (error) {
            console.log(error.response.data);
        }
    }

    fetchAbsHolRequests = async payload => {
        try {
            const { data } = await this.getApiClient().get(
                format(FINALPOINTS.FETCH_ABS_HOL_REQUEST, payload.personnelId)
            );

            const absholrequests = data;
            return { absholrequests };
        } catch (error) {
            console.log(error.response.data);
        }
    }

    fetchCalendar = async payload => {
        try {
            const { data } = await this.getApiClient().get(
                format(FINALPOINTS.FETCH_CALENDAR, payload.personnelId)
            );

            const calendar = data;
            return { calendar };
        } catch (error) {
            console.log(error.response.data);
        }
    }

}

export default new PersonnelService();
