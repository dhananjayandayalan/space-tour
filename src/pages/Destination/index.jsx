import React, { useState } from 'react';

import classes from './Destination.module.scss';
import { Tabs } from '../../components';

const Destination = ({ data }) => {
  const [index, setIndex] = useState(0);
  const value = data[index];

  const names = data.map((item) => item.name);

  const indexHandler = (index) => {
    setIndex(index);
  };

  return (
    <div className={classes.destination}>
      <h3>
        <span>01</span> Pick your Destination
      </h3>
      <figure>
        <picture>
          <source type='image/webp' srcSet={value.images.webp} />
          <img src={value.images.png} alt={`Image of ${names[index]}`} />
        </picture>
        <figcaption>
          <Tabs index={index} handleIndex={indexHandler} data={names} />
          <h1>{value.name}</h1>
          <p>{value.description}</p>
          <hr />
          <div className={classes.facts}>
            <div className={classes.fact}>
              <p>Avg. Distance</p>
              <h3>{value.distance}</h3>
            </div>
            <div className={classes.fact}>
              <p>Est. Travel Time</p>
              <h3>{value.travel}</h3>
            </div>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

export default Destination;
