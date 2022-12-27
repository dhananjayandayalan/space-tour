import React, { useState } from 'react';

import { NumberedSlider } from '../../components';
import classes from './Technology.module.scss';

const Technology = ({ data }) => {
  const [index, setIndex] = useState(0);
  const value = data[index];

  const names = data.map((item) => item.name);

  const indexHandler = (index) => {
    setIndex(index);
  };

  return (
    <div className={classes.technology}>
      <h3>
        <span>03</span> Space Launch 101
      </h3>
      <div className={classes.container}>
        <picture>
          <source
            srcSet={value.images.portrait}
            media={`(min-width: 76.8rem)`}
          />
          <img src={value.images.landscape} alt={`Image of ${value.name}`} />
        </picture>
        <section>
          {/* <NumberedSlider index={index} handleIndex={indexHandler} data={names} /> */}
          <div className={classes.details}>
            <h4>The Terminology ...</h4>
            <h1>{value.name}</h1>
            <p>{value.description}</p>
          </div>
        </section>
      </div>
    </div>
  );
};

{
  /* <NumberedSlider index={index} handleIndex={indexHandler} data={names} /> */
}

export default Technology;
