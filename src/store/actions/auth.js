import * as actionTypes from './actionTypes';
export const authStart = () => {
    return {
        type: actionTypes.AUTH_START,
    };
}

export const authLogout = () => {
    return {
        type: actionTypes.AUTH_LOGOUT,
    };
}