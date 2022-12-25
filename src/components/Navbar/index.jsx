import React, { Fragment, useState } from 'react';
import { createPortal } from 'react-dom';
import { useWindowDimensions } from '../../hooks';

import { DEVICE } from '../../constants';
import classes from './Navbar.module.scss';
import NavItems from './NavItems';
import Sidebar from './Sidebar';

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
