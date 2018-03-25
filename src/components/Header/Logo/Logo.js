import React from 'react';
import c from './Logo.css';
import Star from '../Star/Star';

const logo = (props) => {
  const isInFixedHeader = props.isInFixedHeader ? c.isInFixedHeader : null;
  return (
      <p className={[c.Logo, isInFixedHeader].join(" ")}>
        <Star isInFixedHeader={isInFixedHeader} />
        <span>Akademia</span>
        <span>Gwiazd</span>
      </p>
  )
};

export default logo;
