import axios from 'axios';

const API_URL = process.env.REACT_APP_URL_API;
const token = JSON.parse(localStorage.getItem('jwt'));

const ExpenseAPI = {
    create: () => {
        return axios.post(`${API_URL}/api/expense/create`, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            return response.data;
        })
    },
    get: () => {
        return axios.get(`${API_URL}/api/expense/getexpenses`, {
            params: {
                page: 1
            },
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            return response.data;
        })
    },
    getSingleItem: (id) => {
        return axios.get(`${API_URL}/api/expense/getexpense/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            return response.data;
        })
    },
    update: (id) => {
        return axios.put(`${API_URL}/api/expense/updateexpense/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            return response.data;
        })
    },
    delete: (id) => {
        return axios.delete(`${API_URL}/api/expense/deleteexpense/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            return response.data;
        })
    },
}

export default ExpenseAPI;
