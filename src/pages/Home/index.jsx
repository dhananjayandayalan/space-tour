import React from 'react';

import classes from './Home.module.scss';

const Home = ({ handleRoute }) => {
  return (
    <div className={classes.home}>
      <div className={classes.container}>
        <div className={classes.left}>
          <h3>So, you want to travel to</h3>
          <h1>Space</h1>
          <p>
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </p>
        </div>
        <a onClick={() => handleRoute('destinations')}>
          <span>Explore</span>
        </a>
      </div>
    </div>
  );
};

export default Home;
