import HttpClient from './HttpBaseClient';
import { history } from '../index';
import { format } from 'util';

const FINALPOINTS = {
    FETCH_ROOMS_DATA: 'admi-cli/rooms',
    SEARCH_ROOMS_DATA: 'admi-cli/rooms/search/%s/%s',
    DELETE_ROOMS_DATA: 'admi-cli/rooms/delete/%s'
    
};

class RoomService extends HttpClient{

    fetchRoomsData = async payload => {
        try {
            const { data } = await this.getApiClient().get(
                FINALPOINTS.FETCH_ROOMS_DATA
            );

            const rooms = data;

            return { rooms };
        } catch (error) {
            console.log(error.response.data);
        }
    };
    addRoomsDate = async payload => {
        try {
            const { data } = await this.getApiClient().post(
                FINALPOINTS.ADD_ROOMS_DATA,
                payload
            );

            return { data };
        } catch (error) {
            console.log(error.response.data);
        }
    };
    deleteRoomsData = async payload => {
        try {
            const { data } = await this.getApiClient().delete(
                FINALPOINTS.DELETE_ROOMS_DATA,
                payload
            );

            return { data };
        } catch (error) {
            console.log(error.response.data);
        }
    };
    editRoomsData = async payload => {
        try {
            const { data } = await this.getApiClient().put(
                FINALPOINTS.EDIT_ROOMS_DATA,
                payload
            );

            return { data };
        } catch (error) {
            console.log(error.response.data);
        }
    };
    searchRoomsData = async payload => {
        try {
            const { data } = await this.getApiClient().get(
                FINALPOINTS.SEARCH_ROOMS_DATA,
                payload
            );

            return { data };
        } catch (error) {
            console.log(error.response.data);
        }
    };

}

export default new RoomService();