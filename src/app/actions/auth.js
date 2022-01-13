import axios from 'axios';
import { AUTHENTICATION_SUCCESS, AUTHENTICATION_ERROR } from '../index';

const API_URL = process.env.REACT_APP_URL_API;

export const login = (formData) => async (dispatch) => {
    try {
        const response = await axios.post(`${API_URL}/api/user/login`, formData, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        dispatch({
            type: AUTHENTICATION_SUCCESS,
            payload: response?.data
        })
    } catch(error) {
        dispatch({
            type: AUTHENTICATION_ERROR,
            payload: error
        })
        console.log(error);
    }
}
