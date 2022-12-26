import React, { useState } from 'react';

import classes from './Crew.module.scss';
import { DottedSlider } from '../../components';

const Crew = ({ data }) => {
  const [index, setIndex] = useState(0);
  const value = data[index];

  const names = data.map((item) => item.name);

  const indexHandler = (index) => {
    setIndex(index);
  };

  return (
    <div className={classes.crew}>
      <h3>
        <span>02</span> Meet Your Crew
      </h3>
      <picture>
        <source type='image/webp' srcSet={value.images.webpa} />
        <img src={value.images.png} alt={`Image of ${names[index]}`} />
      </picture>
      <div className={classes.details}>
        <DottedSlider
          index={index}
          handleIndex={indexHandler}
          data={names}
        />
        <div className={classes.description}>
          <h2>{value.role}</h2>
          <h1>{value.name}</h1>
          <p>{value.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default Crew;
