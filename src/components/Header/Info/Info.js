import React from 'react';
import c from './Info.css';
import Star from '../Star/Star';

const info = () => (
    <div className={c.Info}>
      <Star hideOnMobile />
      <p>30 listopada-1 grudnia 2018</p>
      <p>Vienna House Andel’s Łódź</p>
    </div>
);

export default info;
