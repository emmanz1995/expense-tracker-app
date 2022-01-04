import { combineReducers } from 'redux';
import incomes from './incomes';
import expenses from './expenses';

export default combineReducers({
    incomes,
    expenses
});
