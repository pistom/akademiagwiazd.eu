import React from 'react';
import grid from 'bootstrap/dist/css/bootstrap-grid.min.css';
import classes from './Header.css';
import Orbidenti from './Orbidenti/Orbidenti';
import Logo from './Logo/Logo';
import Info from './Info/Info';
import Menu from './Menu/Menu';

const header = (props) => {
  return (
      <div className={[grid.container, classes.Header].join(" ")}>
        <div className={grid.row}>
          <div className={grid["col-8"]}>
            <Logo/>
            <Info/>
          </div>
          <div className={[grid["col-4"], classes.right].join(" ")}>
            <Menu/>
            <Orbidenti/>
          </div>
        </div>
      </div>
  )
};

export default header;
