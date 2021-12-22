import axios from 'axios';

const API_URL = process.env.REACT_APP_URL_API;

const IncomeAPI = {
    getIncome: () => {
        return axios.get(`${API_URL}/api/income/getincomes?page=1`).then((response) => {
            return response.data;
        })
    },
}

export default IncomeAPI;
