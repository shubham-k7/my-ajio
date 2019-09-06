import React from 'react';
import classes from './MenuItem.module.css';
import {NavLink} from 'react-router-dom'

const menuItem = (props) => {
    return (
        <div className={classes.MenuItem}>
            <li><NavLink to={props.link}>{props.label}</NavLink></li>
        </div>
    );
}

export default menuItem;