import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import CartItemDisplay from '../../components/CartItemDisplay/CartItemDisplay';
import * as actions from '../../store/actions/index';
class Cart extends Component {
    render() {
        let cart = <p>Cart is empty. Please go to <NavLink to="/">home</NavLink> to add products!!</p>
        if (this.props.cartItems && this.props.cartItems.length !== 0) {
            cart = this.props.cartItems.map(({product, quantity}) => {
                return <CartItemDisplay product={product} key={product.id} quantity={quantity} removeFromCartClicked={() => this.props.onRemoveCartItem(product.id)}/>;
            })
        }
        return (
            <div>
                {cart}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.cart.items,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onRemoveCartItem: (productId) => dispatch(actions.removeFromCart(productId)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);