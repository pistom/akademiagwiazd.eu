import React from 'react';
import c from './Logo.css';
import Star from '../Star/Star';

const logo = () => (
    <p className={c.Logo}>
      <Star />
      <span>Akademia</span>
      <span>Gwiazd</span>
    </p>
);

export default logo;
