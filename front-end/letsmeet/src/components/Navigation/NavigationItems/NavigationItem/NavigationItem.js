import React from 'react';
import { Link } from 'react-router-dom';

import classes from './NavigationItem.module.css';

/*
    This component is the building block of each navigation link item
    used in the navbar. It is used by the NavigationItems component.
    It will use its props to properly redirect the user when they click on
    a link.
    
    Props:
        - link: the route path to redirect to
        - exact: whether or not the route path should be exact
        - children: what text the link should display
*/

const navigationItem = (props) => (
    <li className={classes.NavigationItem}>
        <Link 
            to={props.link}
            exact={props.exact}>{props.children}
        </Link>
    </li>
);

export default navigationItem;
