import {ADD_TO_CART} from '../Constants';
import {REMOVE_FROM_CART} from '../Constants';

export const addTocart = (product) => {
    return {
        type: ADD_TO_CART,
        payload: product,
    };
    }

export const removefromcart = (product) => {
    return {
        type: REMOVE_FROM_CART,
        payload: product,
    };
    }
    
        