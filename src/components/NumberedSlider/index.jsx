import React from 'react';

import Slider from '../Slider';
import classes from './NumberedSlider.module.scss';

const NumberedSlider = (props) => {
  return (
    <Slider
      {...props}
      className={classes['numbered-slider']}
      activeClass={classes.active}
      type={'number'}
    />
  );
};

export default NumberedSlider;
