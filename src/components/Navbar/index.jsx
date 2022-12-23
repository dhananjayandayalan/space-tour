import React, { Fragment, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import classes from './Navbar.module.scss';

const overlayDOM = document.getElementById('overlay');

const Sidebar = ({ handleMenu, handleRoute }) => {
  const [close, setClose] = useState(false);

  return <Fragment></Fragment>;
};

const Navbar = ({ handleRoute }) => {
  const [menu, setMenu] = useState(false);

  const menuHandler = () => {
    setMenu(!menu);
  };

  return (
    <div className={classes.navbar}>
      <img src='./assets/shared/logo.svg' alt='space tour logo' />
      <div className={classes['nav-items']}>
        {!menu && (
          <img
            src='./assets/shared/icon-hamburger.svg'
            role='button'
            onClick={menuHandler}
            aria-pressed={menu}
            id={classes['hamburger-logo']}
          />
        )}
        {menu && <Sidebar handleMenu={menuHandler} handleRoute={handleRoute} />}
      </div>
    </div>
  );
};

export default Navbar;