import axios from 'axios';

const API_URL = process.env.REACT_APP_URL_API;

const token = JSON.parse(localStorage.getItem('jwt'));

const IncomeAPI = {
    getSingleIncome: (id) => {
        return axios.get(`${API_URL}/api/income/getincome/${id}`, {
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
    },
    onDeleteIncome: (id) => {
        return axios.delete(`${API_URL}/api/income/deleteincome/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            return response.data;
        })
    },
    onUpdateIncome: (id) => {
        return axios.put(`${API_URL}/api/income/updateincome/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            return response.data;
        })
    }
}

export default IncomeAPI;
