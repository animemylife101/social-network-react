import API from "../api/api"
import { LOG_IN, LOG_OUT } from "../types/auth";
import { setError, setPreloader } from './preloader';
import defineError from '../items-helper/define-error';
import { browserHistory } from 'react-router'
import { ROUTING } from "../types/routing";
import { push } from "react-router-redux";

export const login = (data, history) => async (dispatch) => {
    dispatch(setError(''));
    dispatch(setPreloader(true));
    try {
        let response = await API.login(data);
        if (response.data.status === 'ok') {
            dispatch(loginSucces(response.data.data));
            return {
                status: 'OK'
            }
        }
        if (response.data.status === 'err') {
            dispatch(setError(defineError(response.data.message)));
            dispatch(setPreloader(false));
        }
    } catch (err) {
        dispatch(setError(defineError('not_connected_to_network')));
        dispatch(setPreloader(false));
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