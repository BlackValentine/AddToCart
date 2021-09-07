import * as types from './../constants/ActionType';

export const actAddToCart = (product, quantity) => {
    return {
        type: types.ADD_TO_CART,
        product,
        quantity
    }
}

export const actDeleteFromCart = (product) => {
    return {
        type: types.DELETE_FROM_CART,
        product
    }
}

export const actUpdateMessage = (message) => {
    return {
        type: types.UPDATE_MESSAGE,
        message
    }
}

export const actUpdateQuantity = (product, quantity) => {
    return {
        type: types.UPDATE_QUANTITY,
        product,
        quantity
    }
}