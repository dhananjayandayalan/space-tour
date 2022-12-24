import React, { Fragment, useState } from 'react';
import { createPortal } from 'react-dom';
import { useWindowDimensions } from '../../hooks';

import { DEVICE } from '../../constants';
import classes from './Navbar.module.scss';

const overlayDOM = document.getElementById('overlay');

const Sidebar = ({ handleMenu, handleRoute }) => {
  const [close, setClose] = useState(false);

  return <Fragment>
    
  </Fragment>;
};

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
                {item}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

const Navbar = (props) => {
  const [menu, setMenu] = useState(false);
  const { width } = useWindowDimensions();

  const notMobileHandler = () => {
    return width >= DEVICE.DEVICE_TABLET;
  };

  const menuHandler = () => {
    setMenu(!menu);
  };

  return (
    <Fragment>
      <div className={classes.navbar}>
        <img src='./assets/shared/logo.svg' alt='space tour logo' />
        {!notMobileHandler() && !menu && (
          <img
            src='./assets/shared/icon-hamburger.svg'
            role='button'
            onClick={menuHandler}
            aria-pressed={menu}
            id={classes['hamburger-logo']}
          />
        )}
        {notMobileHandler() && <NavItems {...props} width={width} />}
      </div>
      {menu && (
        <Sidebar handleMenu={menuHandler} handleRoute={props.handleRoute} />
      )}
    </Fragment>
  );
};

export default Navbar;
