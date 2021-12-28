import {
    CREATE_INCOME, GET_INCOMES,
    DELETE_INCOME, UPDATE_INCOME
} from '../index';
import API from '../API';

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
