import { combineReducers } from 'redux';
import incomes from './incomes';
import expenses from './expenses';
import auth from './auth';

export default combineReducers({
    incomes,
    expenses,
    auth
});
