import React from 'react';

import Overlay from '../Overlay';
import NavItems from './NavItems';
import classes from './Navbar.module.scss';

const Sidebar = (props) => {
  return (
    <Overlay>
      <div className={classes.wrapper}>
        <div className={classes.inside}>
          <img
            src='./assets/shared/icon-close.svg'
            alt='close icon'
            role='button'
            onClick={props.handleMenu}
          />
          <NavItems {...props} className={classes['nav-overlay']} />
          {/* <nav className={classes['nav-overlay']}>
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
          </nav> */}
        </div>
      </div>
    </Overlay>
  );
};

export default Sidebar;
