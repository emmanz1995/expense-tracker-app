import { CREATE_EXPENSE, GET_EXPENSES, UPDATE_EXPENSE, DELETE_EXPENSE } from '../index';

const initialState = []

function expenseReducer(expenses = initialState, action) {
    const { payload, type } = action;
    switch(type) {
        case CREATE_EXPENSE:
            return [...expenses, payload]
        case GET_EXPENSES:
            return payload?.docs
        case UPDATE_EXPENSE:
            return expenses.map((expense) => {
                if(expense.id === payload.id) {
                    return {
                        ...expense,
                        ...payload
                    }
                } else {
                    return expense;
                }
            })
        case DELETE_EXPENSE:
            return expenses.filter(({ id }) => payload.id !== id);

        default: return expenses;
    }
}
export default expenseReducer;
