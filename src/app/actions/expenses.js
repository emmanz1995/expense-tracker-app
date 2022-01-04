import API from '../API';
import { GET_EXPENSES } from '../index';

export const getExpenses = () => async (dispatch) => {
    try {
        const response = await API.getExpenses()
        dispatch({
            types: GET_EXPENSES,
            payload: response?.data
        })
    } catch(error) {
        console.log(error.message);
    }
}
