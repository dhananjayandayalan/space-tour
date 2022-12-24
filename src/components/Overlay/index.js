import React from 'react';
import { createPortal } from 'react-dom';

const Overlay = (props) => {
  const overlayDom = document.getElementById('overlay');

  return createPortal(props.children, overlayDom);
};

export default Overlay;
