import React from 'react';
import classes from './Orbidenti.css';
import orbidentiLogo from '../../../assets/images/orbidenti_white.svg';

const orbidenti = () => {
  return (
      <div className={classes.Orbidenti}>
        <img src={orbidentiLogo} alt="Orbidenti"/>
      </div>
  )
};

export default orbidenti;
