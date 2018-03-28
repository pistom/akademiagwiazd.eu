import React, {Component} from 'react';
import getPageHeight from "../getPageHeight";
import g from 'bootstrap/dist/css/bootstrap-grid.min.css';
import c from './Patrons.css';
import invisalign from '../../../assets/images/logos/invisalign.svg';
import dentalradio from '../../../assets/images/logos/dental_radio.svg';
import psi from '../../../assets/images/logos/psi.svg';
import aod from '../../../assets/images/logos/aod.svg';

class Patrons extends Component {
  componentDidMount(){
    getPageHeight();
    setTimeout(() => {
      getPageHeight();
    },500)
  }

  logoClickHandler = (url) => {
    window.open(url, "_blank");
  };

  render() {
    return (
        <div className={c.Patrons}>
          <div className={g.container}>
            <h4 key="h1" className="pageTitle">
              Partnerzy
            </h4>
            <div className={g.row}>
              <div className={[g["col-lg-4"]].join(" ")}>
                <h5>Partner merytoryczny</h5>
                <div className={c.Box}
                     onClick={() => {this.logoClickHandler('https://www.invisalign.pl')}}
                >
                  <img src={invisalign} alt="invisalign"/>
                </div>
              </div>
              <div className={[g["col-lg-8"]].join(" ")}>
                <h5>Patroni medialni</h5>
                <div className={c.Box}>
                  <div className={g.row}>
                    <div className={[g['col-sm-6'], g['col-md-4']].join(" ")}
                         onClick={() => {this.logoClickHandler('https://psi-icoi.pl/')}}
                    >
                      <img src={psi} alt="PSI logo"/>
                    </div>
                    <div className={[g['col-sm-6'], g['col-md-4']].join(" ")}
                         onClick={() => {this.logoClickHandler('http://www.asmedia.com.pl/art-of-dentistry')}}
                    >
                      <img src={aod} alt="Art of Dentistry logo"/>
                    </div>
                    <div className={[g['col-sm-6'], g['col-md-4']].join(" ")}
                         onClick={() => {this.logoClickHandler('http://www.dentalradio.pl/')}}
                    >
                      <img src={dentalradio} alt="Dental Radio logo"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Patrons;
