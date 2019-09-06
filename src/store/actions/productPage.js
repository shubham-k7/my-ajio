import * as actionTypes from './actionTypes';
import axios from 'axios';
import products from '../../products.json';

export const initProductsSuccess = (productsList) => {
    return {
        type: actionTypes.INIT_PRODUCTS_SUCCESS,
        products: productsList,
    };
}

export const initProductsStart = () => {
    return {
        type: actionTypes.INIT_PRODUCTS_START,
    };
}

export const initProductsFail = (error) => {
    return {
        type: actionTypes.INIT_PRODUCTS_FAIL,
        error: error,
    };
}

export const initProducts = () => {
    return dispatch => {
        dispatch(initProductsStart());
        axios.get('http://localhost:3000/products.json').then(response => {
            setTimeout(() => dispatch(initProductsSuccess(response.data)), 3000);
        }
        ).catch(error => {
            dispatch(initProductsFail(error));
        });
        // new Promise((resolve,reject) => {})
        // dispatch(setProducts(products));
    }
}