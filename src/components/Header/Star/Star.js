import React from 'react';
import c from './Star.css';
import star from '../../../assets/images/star.svg';

const start = (props) => {
  const hideOnMobile = (props.hideOnMobile ? "hideOnMobile" : null);
  const isInFixedHeader = props.isInFixedHeader ? "isInFixedHeader" : null;

  return(
    <img className={[c.Star, c[hideOnMobile], c[isInFixedHeader]].join(" ")} src={star} alt="Star"/>
  )
};

export default start;
