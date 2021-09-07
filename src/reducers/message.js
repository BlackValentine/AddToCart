import * as Message from './../constants/Message'
import * as types from './../constants/ActionType'

var initialState = Message.MSG_WELCOME;

const message = (state = initialState, action) => {
    switch (action.type) {
        case types.DELETE_FROM_CART:
            state = Message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS
            return [...state]
        case types.UPDATE_QUANTITY:
            state = Message.MSG_UPDATE_CART_SUCCESS
            return [...state]
        case types.ADD_TO_CART:
            state = Message.MSG_UPDATE_CART_SUCCESS
            return [...state]
        default: return [...state]
    }
}

export default message;