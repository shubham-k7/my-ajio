import * as actionTypes from './actionTypes';
export const addToCart = (product) => {
    return (dispatch) => {
        dispatch(addToCartStart())
        setTimeout(() => dispatch(addToCartSuccess(product)), 2000);
    }
}

export const removeFromCart = (productId) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        productId: productId,
    };
}

export const addToCartStart = () => {
    return {
        type: actionTypes.ADD_TO_CART_START,
    };
}

export const addToCartSuccess = (product) => {
    return {
        type: actionTypes.ADD_TO_CART_SUCCESS,
        product: product,
    };
}