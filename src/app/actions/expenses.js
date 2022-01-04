import API from '../API';
import { CREATE_EXPENSE, GET_EXPENSES } from '../index';

export const createExpenses = (formData) => async (dispatch) => {
    try {
        const response = await API.onCreateExpenses(formData)
        dispatch({
            type: CREATE_EXPENSE,
            payload: response?.data
        })
    } catch(error) {
        console.log(error.message);
    }
}

export const getExpenses = () => async (dispatch) => {
    try {
        const response = await API.getExpenses()
        dispatch({
            type: GET_EXPENSES,
            payload: response?.data
        })
    } catch(error) {
        console.log(error.message);
    }
}
