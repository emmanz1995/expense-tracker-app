import {
    GET_INCOMES,
    CREATE_INCOME,
    DELETE_INCOME,
    UPDATE_INCOME
} from '../index';

const initialState = [];

function incomeReducer(incomes = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case CREATE_INCOME:
            return [...incomes, payload]
        case GET_INCOMES:
            return payload.docs;
        case DELETE_INCOME:
            return incomes.filter(({ id }) => id !== payload.id);
        case UPDATE_INCOME:
            return incomes.map((income) => {
                if(income.id === payload.id) {
                    return {
                        ...income,
                        ...payload
                    };
                } else {
                    return income;
                }
            })
        default: return incomes
    }
}

export default incomeReducer

