import * as actions from '../actions/actionTypes';

const authStart = (state, action) => {
    return {
        ...state,
        isAuthenticated: true,
        userData: {
            name: 'shubham',
            userid: 'shubham',
        }
    };
}

const authLogout = (state, action) => {
    return {
        ...state,
        isAuthenticated: false,
        userData: null
    };
}

const initialState = {
    isAuthenticated: false,
    userData: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.AUTH_START: return authStart(state, action);
        case actions.AUTH_SUCCESS: return authStart(state, action);
        case actions.AUTH_FAIL: return authLogout(state, action);
        case actions.AUTH_LOGOUT: return authLogout(state, action);
    }
    return state;
}
export default reducer;