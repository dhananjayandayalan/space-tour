import React from 'react';

import classes from './DottedSlider.module.scss';

const DottedSlider = ({ index, handleIndex, data }) => {
  return (
    <div className={classes['dotted-slider']}>
      <ul>
        {data.map((item, i) => (
          <li key={item + i} tabIndex={'0'}>
            <button
              className={i === index ? classes.active : ''}
              onClick={() => handleIndex(i)}
            >
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DottedSlider;
