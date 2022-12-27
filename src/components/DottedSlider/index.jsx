import React from 'react';

import Slider from '../Slider';
import classes from './DottedSlider.module.scss';

const DottedSlider = (props) => {
  return (
    <Slider
      {...props}
      className={classes['dotted-slider']}
      activeClass={classes.active}
      type={'dot'}
    />
  );
};

export default DottedSlider;
