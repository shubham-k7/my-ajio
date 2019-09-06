import React from 'react';
import { Link } from 'react-router-dom';
import ajioLogo from '../../assets/images/Ajio-Logo.svg';
import classes from './Logo.module.css';
const logo = (props) => (
    <Link to="/">
        <div className={classes.Logo}>
            <img src={ajioLogo} alt="AJIO" />
        </div>
    </Link>
);

export default logo;