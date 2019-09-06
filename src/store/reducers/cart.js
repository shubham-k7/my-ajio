import * as actions from '../actions/actionTypes';

const initialState = {
    items: [],
    loading: false,
}

const removeFromCart = (state, action) => {
    return {
        ...state,
        items: state.items.map(({ product, quantity }) => {
            if (product.id === action.productId) {
                if (quantity > 1)
                    return { product: { ...product }, quantity: quantity - 1 };
            }
            else
                return { product: { ...product }, quantity: quantity }

        }).filter(Boolean).filter(({ quantity }) => quantity !== 0),
        loading: false,
    }
}

const addToCartStart = (state, action) => {
    return {
        ...state,
        loading: true,
    };
}

const addToCartSuccess = (state, action) => {
    if (!action.product)
        return { ...state, loading: false };
    const prodInCart = state.items.find(({ product }) => product.id === action.product.id);
    console.log(prodInCart);
    if (prodInCart) {
        prodInCart.quantity += 1;
        return {
            ...state,
            items: state.items.map(({ product, quantity }) => {
                if (product.id === prodInCart.id) {
                    return {
                        product: { ...product },
                        quantity: quantity + 1,
                    };
                }
                else
                    return { product: product, quantity: quantity };
            }),
            loading: false,
        }
    }
    return {
        ...state,
        items: state.items.concat({ product: action.product, quantity: 1 }),
        loading: false,
    }
}

const addToCartFail = (state, action) => {
    return {
        ...state,
        loading: false,
    };
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actions.REMOVE_FROM_CART: return removeFromCart(state, action);
        case actions.ADD_TO_CART_START: return addToCartStart(state, action);
        case actions.ADD_TO_CART_SUCCESS: return addToCartSuccess(state, action);
        case actions.ADD_TO_CART_FAIL: return addToCartFail(state, action);
    }
    return state;
}

export default reducer;