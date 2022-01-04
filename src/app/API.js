import axios from 'axios';
const API_URL = process.env.REACT_APP_URL_API;
const token = JSON.parse(localStorage.getItem('jwt'));

class API {
    onCreateIncome(formData) {
        return axios.post(`${API_URL}/api/income/create`, formData, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
    }
    getIncomes() {
        return axios.get(`${API_URL}/api/income/getincomes?page=1`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    }
    onDeleteIncome(id) {
        return axios.delete(`${API_URL}/api/income/deleteincome/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    }
    onUpdateIncome(id) {
        return axios.put(`${API_URL}/api/income/updateincome/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    }

    getExpenses() {
        return axios.get(`${API_URL}/api/expense/getexpenses`, {
            params: {
                page: 1
            },
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    }
}

export default new API();
