import { AUTHENTICATION_SUCCESS, AUTHENTICATION_ERROR } from '../index';

const initialState = {
    loginSuccess: false,
    loading: false,
}

export default function(state = initialState, action) {
    const { payload, type } = action;
    switch(type) {
        case AUTHENTICATION_SUCCESS:
            return {
                ...state,
                loginSuccess: true,
                loading: true
            }
        case AUTHENTICATION_ERROR:
            return {
                error: payload,
                loading: false
            }
        default: return state
    }
}
