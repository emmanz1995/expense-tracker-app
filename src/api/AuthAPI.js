import axios from 'axios';

const API_URL = process.env.REACT_APP_URL_API;

const AuthAPI = {
    onLogin: (formData) => {
        return axios.post(`${API_URL}/api/user/login`, formData, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            if(response.data.token) {
                localStorage.setItem('jwt', JSON.stringify(response.data.token))
            }
            return response;
        })
    },
    onLogout: () => {
        localStorage.clear();
    },
    getJWT: () => {
        return JSON.parse(localStorage.getItem('jwt'))
    }
}

export default AuthAPI;
