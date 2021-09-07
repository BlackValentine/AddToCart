import * as types from './../constants/ActionType'

var data = JSON.parse(localStorage.getItem('CART'))

var initialState = data ? data : [];

const cart = (state = initialState, action) => {
    var { product, quantity } = action
    var index = -1
    switch (action.type) {
        case types.ADD_TO_CART:
            index = findProductInCart(state, product);
            if (index !== -1) {
                state[index].quantity += quantity
            } else {
                state.push({
                    product,
                    quantity
                })
            }
            localStorage.setItem('CART', JSON.stringify(state))
            return [...state]
        case types.DELETE_FROM_CART:
            index = findProductInCart(state, product);
            if (index !== -1) {
                state.splice(index, 1)
            }
            localStorage.setItem('CART', JSON.stringify(state))
            return [...state]
        case types.UPDATE_QUANTITY:
            index = findProductInCart(state, product);
            if (index !== -1) {
                state[index].quantity = quantity
            }
            localStorage.setItem('CART', JSON.stringify(state))
            return [...state]
        default: return [...state]
    }
}

var findProductInCart = (cart, product) => {
    var i = -1;
    if (cart.length > 0) {
        cart.forEach((cartItem, index) => {
            if (cartItem.product.id === product.id) {
                i = index
            }
        })
    }
    return i;
}

export default cart;