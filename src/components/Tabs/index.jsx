import React from 'react';

import classes from './Tabs.module.scss';

const Tabs = ({ index, handleTabs, data }) => {
  return (
    <div className={classes.tabs}>
      <ul>
        {data.map((item, i) => (
          <li key={item + i} tabIndex={'0'}>
            <button
              className={i === index ? classes.active : ''}
              onClick={() => handleTabs(i)}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tabs;
