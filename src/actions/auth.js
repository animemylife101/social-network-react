import API from "../api/api"
import { LOG_IN, LOG_OUT } from "../types/auth";

import defineError from '../items-helper/define-error';

export const login = (data) => async (dispatch) => {
    try {
        let response = await API.login(data);
        if (response.data.status === 'ok') {
            dispatch(loginSucces(response.data.data));
            return {
                status: 'ok'
            }
        }

        if (response.data.status === 'err') {
            return {
                status: 'err',
                error: defineError(response.data.message)
            }
        }
    } catch(err) {
        return {
            status: 'err',
            error: defineError('not_connected_to_network')
        }
    }
};

export const logout = () => (dispatch) => {
    dispatch(unfollowSucces());
}

const loginSucces = (data) => ({
    type: LOG_IN,
    data
});

const unfollowSucces = () => ({
    type: LOG_OUT
})