import React, { useState } from 'react';
import * as Message from './../constants/Message'


function CartItem(props) {
    var { item } = props;
    const [quantity, setQuantity] = useState(1)

    var quantityCart = item.quantity > 0 ? item.quantity : quantity

    var onDeleteFromCart = (product) => {
        props.onDeleteFromCart(product)
        props.onUpdateMessage(Message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS)
    }

    var onUpdateQuantity = (product, quantity) => {
        if (quantity > 0) {
            setQuantity(quantity)
            props.onUpdateQuantity(product, quantity)
            props.onUpdateMessage(Message.MSG_UPDATE_CART_SUCCESS)
        }
    }

    return (
        <tr>
            <th scope="row">
                <img src={item.product.image}
                    alt="" className="img-fluid z-depth-0" />
            </th>
            <td>
                <h5>
                    <strong>{item.product.name}</strong>
                </h5>
            </td>
            <td>{item.product.price}$</td>
            <td className="center-on-small-only">
                <span className="qty">{quantityCart}</span>
                <div className="btn-group radio-group" data-toggle="buttons">
                    <label onClick={() => { onUpdateQuantity(item.product, item.quantity - 1) }} className="btn btn-sm btn-primary btn-rounded waves-effect waves-light">
                        <a href="#123">—</a>
                    </label>
                    <label onClick={() => { onUpdateQuantity(item.product, item.quantity + 1) }} className="btn btn-sm btn-primary btn-rounded waves-effect waves-light">
                        <a href="#123">+</a>
                    </label>
                </div>
            </td>
            <td>{item.product.price * item.quantity}$</td>
            <td>
                <button onClick={() => onDeleteFromCart(item.product)} type="button" className="btn btn-sm btn-primary waves-effect waves-light"
                    data-toggle="tooltip" data-placement="top" title=""
                    data-original-title="Remove item">
                    X
                </button>
            </td>
        </tr>
    );
}

export default CartItem;
