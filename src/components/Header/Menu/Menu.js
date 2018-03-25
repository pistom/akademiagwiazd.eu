import React from 'react';
import c from './Menu.css';

const menu = (props) => {
  const white = props.white ? c.White : null;
  return (
      <div onClick={props.openMenu} className={[c.Menu, white].join(" ")}>
        <div></div>
        <div></div>
        <div></div>
      </div>
  )
};

export default menu;
