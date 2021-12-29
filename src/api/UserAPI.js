import axios from 'axios';

const token = JSON.parse(localStorage.getItem('jwt'));
const API_URL = process.env.REACT_APP_URL_API;

const UserAPI = {
    getMe: () => {
        return axios.get(`${API_URL}/api/user/me`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            return response.data;
        })
    },
    getUsers: () => {
        return axios.get(`${API_URL}/api/user/getusers`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            return response.data;
        })
    }
}

export default UserAPI;
