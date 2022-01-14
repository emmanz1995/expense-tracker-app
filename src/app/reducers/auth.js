import { AUTHENTICATION_SUCCESS, AUTHENTICATION_ERROR } from '../index';

const jwt = JSON.parse(localStorage.getItem('jwt'));

const initialState = jwt ? { loginSuccess: true, jwt } : { loginSuccess: false, jwt: null }

export default function(state = initialState, action) {
    const { payload, type } = action;
    switch(type) {
        case AUTHENTICATION_SUCCESS:
            return {
                ...state,
                loginSuccess: true,
                jwt: payload,
            }
        case AUTHENTICATION_ERROR:
            return {
                error: payload,
                token: null
            }
        default: return state
    }
}
