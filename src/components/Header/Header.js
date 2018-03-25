import React from 'react';
import grid from 'bootstrap/dist/css/bootstrap-grid.min.css';
import c from './Header.css';
import Orbidenti from './Orbidenti/Orbidenti';
import Logo from './Logo/Logo';
import Info from './Info/Info';
import Menu from './Menu/Menu';
import Lead from './Lead/Lead';
import FixedHeader from './FixedHeader/FixedHeader';

const header = (props) => {
  return [
    <FixedHeader key="fixedHeader" openMenu={props.openMenu}/>,
    <div key="mainHeader" className={[grid.container, c.Header].join(" ")}>
      <div className={grid.row}>
        <div className={grid["col-8"]}>
          <Logo/>
          <Info/>
        </div>
        <div className={[grid["col-4"], c.right].join(" ")}>
          <Menu openMenu={props.openMenu}/>
          <Orbidenti/>
        </div>
      </div>
      <Lead/>
    </div>
  ]
};

export default header;
