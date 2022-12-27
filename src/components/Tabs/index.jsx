import React from 'react';

import Slider from '../Slider';
import classes from './Tabs.module.scss';

const Tabs = (props) => {
  return (
    <Slider
      {...props}
      className={classes.tabs}
      activeClass={classes.active}
      type={'tab'}
    />
  );
};

export default Tabs;
