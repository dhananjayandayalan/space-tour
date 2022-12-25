import React, { Fragment } from 'react';

import classes from './Navbar.module.scss';
import { DEVICE } from '../../constants';

const NavItems = (props) => {
  const { handleRoute, route, navItems, width } = props;
  return (
    <nav className={classes['nav-items']}>
      <ul>
        {navItems.map((item, index) => {
          return (
            <li key={item + index} tabIndex={'0'}>
              <button
                className={route === item ? classes.active : ''}
                onClick={() => handleRoute(item)}
              >
                {width >= DEVICE.DEVICE_DESKTOP && <span>{'0' + index}</span>}
                <span>{item}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavItems;
