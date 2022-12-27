import React from 'react';

const Slider = ({ index, handleIndex, data, className, type, activeClass }) => {
  return (
    <div className={className}>
      <ul>
        {data.map((item, i) => (
          <li key={item + i} tabIndex={'0'}>
            <button
              className={i === index ? activeClass : ''}
              onClick={() => handleIndex(i)}
            >
              {type === 'tab' && item}
              {type === 'number' && i + 1}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Slider;
