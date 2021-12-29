import axios from 'axios';

const API_URL = process.env.REACT_APP_URL_API;
const token = JSON.parse(localStorage.getItem('jwt'));

const ExpenseAPI = {}

export default ExpenseAPI;
