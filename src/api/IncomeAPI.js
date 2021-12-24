import axios from 'axios';

const API_URL = process.env.REACT_APP_URL_API;

const token = JSON.parse(localStorage.getItem('jwt'))

const IncomeAPI = {
    getIncome: () => {
        return axios.get(`${API_URL}/api/income/getincomes?page=1`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            return response.data;
        })
    },
    onCreateIncome: (formData) => {
        return axios.post(`${API_URL}/api/income/create`, formData,{
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            return response.data;
        })
    }
}

export default IncomeAPI;
