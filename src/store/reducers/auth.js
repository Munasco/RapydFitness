import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    token: null,
    error: null,
    loading: false,
    country: '',
    amount: 150000
};

const authStart = state =>
    updateObject(state, {
        error: null,
        loading: true
    });

const authSuccess = (state, action) =>
    updateObject(state, {
        token: action.token,
        error: null,
        loading: false
    });

const authFail = (state, action) =>
    updateObject(state, {
        error: action.error,
        loading: false
    });

const authLogout = state =>
    updateObject(state, {
        token: null
    });

// eslint-disable-next-line default-param-last
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START:
            return authStart(state, action);
        case actionTypes.AUTH_SUCCESS:
            return authSuccess(state, action);
        case actionTypes.AUTH_FAIL:
            return authFail(state, action);
        case actionTypes.AUTH_LOGOUT:
            return authLogout(state, action);

        default:
            return state;
    }
};

export default reducer;