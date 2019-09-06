import React from 'react';
import Button from '../UI/Button/Button';
import classes from './MenuList.module.css';
import MenuItem from './MenuItem/MenuItem';
import CartIcon from '../CartIcon/CartIcon';

const menuList = (props) => {
    return (
        <ul className={classes.MenuList}>
            <MenuItem label="Men" link="/shop/men"></MenuItem>
            <MenuItem label="women" link="/shop/women"></MenuItem>
            <MenuItem label="sale" link="/shop/men"></MenuItem>
            <CartIcon />
        </ul>
    );
}

export default menuList;