import React from 'react';
import { connect } from 'react-redux';
import Cart from './../Components/Cart'
import CartItem from './../Components/CartItem'
import CartResult from './../Components/CartResult'
import { actDeleteFromCart, actUpdateQuantity, actUpdateMessage } from './../actions/index'

function CartContainer(props) {
    var { cart, onDeleteFromCart, onUpdateQuantity, onUpdateMessage } = props;

    var showCartItem = (cart) => {
        var result = null;
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return <CartItem
                    key={index}
                    item={item}
                    onDeleteFromCart={onDeleteFromCart}
                    onUpdateQuantity={onUpdateQuantity}
                    onUpdateMessage={onUpdateMessage}
                />
            })
        }
        return result;
    }

    var showCartResult = (cart) => {
        var result = null;
        if (cart.length > 0) {
            return <CartResult cart={cart} />
        }
        return result;
    }

    return (
        <Cart>
            {showCartItem(cart)}
            {showCartResult(cart)}
        </Cart>
    );
}


const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteFromCart: (product) => {
            dispatch(actDeleteFromCart(product))
        },

        onUpdateQuantity: (product, quantity) => {
            dispatch(actUpdateQuantity(product, quantity))
        },

        onUpdateMessage: (message) => {
            dispatch(actUpdateMessage(message))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
