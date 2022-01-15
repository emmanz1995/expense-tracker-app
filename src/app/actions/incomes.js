import {
    CREATE_INCOME, GET_INCOMES,
    DELETE_INCOME, UPDATE_INCOME
} from '../index';
import API from '../API';

export const addIncome = (formData) => async (dispatch) => {
    try {
        const response = await API.onCreateIncome(formData)
        dispatch({
            type: CREATE_INCOME,
            payload: response?.data
        })
    } catch(error) {
        console.log(error);
    }
}

export const fetchIncomes = () => async (dispatch) => {
    try {
        const response = await API.getIncomes()
        dispatch({
            type: GET_INCOMES,
            payload: response?.data
        })
    } catch(error) {
        console.log(error);
    }
}

export const deleteIncome = (id) => async (dispatch) => {
    try {
        const response = await API.onDeleteIncome(id)
        dispatch({
            type: DELETE_INCOME,
            payload: response?.data
        })
    } catch(error) {
        console.log(error);
    }
}

export const updateIncome = (id, formData) => async (dispatch) => {
    try {
        const response = await API.onUpdateIncome(id, formData)
        dispatch({
            type: UPDATE_INCOME,
            payload: response?.data
        })
    } catch(error) {
        console.log(error);
    }
}
