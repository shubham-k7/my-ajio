import * as actionTypes from '../actions/actionTypes';

const initProductsSuccess = (state, action) => {
    return {
        ...state,
        products: action.products,
        loading: false,
    };
}

const initProductsStart = (state, action) => {
    return {
        ...state,
        loading: true,
    };
}

const initProductsFail = (state, action) => {
    return {
        ...state,
        loading: false,
    }
}

const initialState = {
    products: [],
    loading: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INIT_PRODUCTS_START: return initProductsStart(state, action);
        case actionTypes.INIT_PRODUCTS_SUCCESS: return initProductsSuccess(state, action);
        case actionTypes.INIT_PRODUCTS_FAIL: return initProductsFail(state, action);
    }
    return state;
}

export default reducer;