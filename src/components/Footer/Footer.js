import React from 'react';
import c from './Footer.css';
import ppz from '../../assets/images/ppz.svg';
import orbidenti from '../../assets/images/orbidenti.svg';

const footer = () => (
    <div className={c.Footer}>
      <div className={c.Content}>
        <img className={c.Ppz} src={ppz} alt="Pracownia Pozytywnych Zmian"/>
        <div className={c.PpzInfo}>
          <h4>Organizator</h4>
          <p style={{color: 'rgb(242,101,36)'}}>Pracownia Pozytywnych Zmian</p>
        </div>
        <div className={c.OrbidentiInfo}>
          <h4>dla</h4>
          <p style={{color: 'rgb(16,183,182)'}}>OrbiDenti sp. z o.o</p>
        </div>
        <img className={c.Orbidenti} src={orbidenti} alt="Orbidenti"/>
      </div>

    </div>
);

export default footer;
