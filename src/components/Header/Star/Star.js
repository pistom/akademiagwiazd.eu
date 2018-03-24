import React from 'react';
import c from './Star.css';
import star from '../../../assets/images/star.svg';

const start = (props) => {
  const hideOnMobile = (props.hideOnMobile ? "hideOnMobile" : null);
  return(
    <img className={[c.Star, c[hideOnMobile]].join(" ")} src={star} alt="Star"/>
  )
};

export default start;
