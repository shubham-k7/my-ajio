import React from 'react';
import { connect } from 'react-redux';
import classes from './CartIcon.module.css';
import { NavLink } from 'react-router-dom'
import source from '../../assets/images/cart-70-24.ico';
const cartIcon = (props) => {
    return (
        <div className={classes.CartIcon}>
            <NavLink to="/cart" ><img style={{height: '16px', paddingTop: '8px'}} src={source}></img></NavLink>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        items: state.cart.items,
    };
}

export default connect(mapStateToProps)(cartIcon);