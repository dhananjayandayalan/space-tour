import React, { Fragment, useState } from 'react';
import { createPortal } from 'react-dom';
import { useWindowDimensions } from '../../hooks';

import { DEVICE } from '../../constants';
import classes from './Navbar.module.scss';
import Overlay from '../Overlay';

const overlayDOM = document.getElementById('overlay');

const Sidebar = ({ handleMenu, handleRoute, navItems, route, width }) => {
  return (
    <Overlay>
      <div className={classes.wrapper}>
        <div className={classes.inside}>
          <img
            src='./assets/shared/icon-close.svg'
            alt='close icon'
            role='button'
            onClick={handleMenu}
          />
          <nav className={classes['nav-overlay']}>
            <ul>
              {navItems.map((item, index) => {
                return (
                  <li key={item + index} tabIndex={'0'}>
                    <button
                      onClick={() => {
                        handleRoute(item);
                        handleMenu();
                      }}
                    >
                      <span>{'0' + index}</span>
                      <span>{item}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </Overlay>
  );
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
      {!notMobileHandler() && menu && (
        <Sidebar {...props} handleMenu={menuHandler} />
      )}
    </Fragment>
  );
};

export default Navbar;
