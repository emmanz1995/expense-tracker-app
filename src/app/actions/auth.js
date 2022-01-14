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
        if(response?.data?.token) {
            localStorage.setItem('jwt', JSON.stringify(response.data.token))
        }
        dispatch({
            type: AUTHENTICATION_SUCCESS,
            payload: { token: response?.data?.token }
        })
    } catch(error) {
        dispatch({
            type: AUTHENTICATION_ERROR,
            payload: error
        })
        console.log(error.response.data.msg);
    }
}
