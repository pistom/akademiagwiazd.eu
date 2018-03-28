import React, {Component} from 'react';
import getPageHeight from "../getPageHeight";
import g from 'bootstrap/dist/css/bootstrap-grid.min.css';
import c from './Agenda.css';
import Icon from '../MainPage/Icons/Icon/Icon';
import agenda from './Information';

class Agenda extends Component {
  componentDidMount(){
    getPageHeight();
    setTimeout(() => {
      getPageHeight();
    },500)
  }

  render() {
    return (
        <div className={c.Agenda}>
          <div className={g.container}>
            <h4 className="pageTitle">
              Program
            </h4>
            {agenda.map((i, index) => (
                <div key={index} className={[[g.row], [c.Module]].join(" ")}>
                  <div className={[g["col-sm-4"], g["col-md-3"], g["col-lg-2"]].join(" ")}>
                    <Icon file={i.icon} title={i.iconTitle} agenda />
                  </div>
                  <div className={[g["col-sm-8"], g["col-md-9"], g["col-lg-10"]].join(" ")}>
                    <h3>{i.title}</h3>
                    <h4>{i.author}</h4>
                    {i.desc}
                  </div>
                </div>
            ))}
            <p style={{textAlign: 'right', marginTop: '40px'}}>
              <a className={c.Cta} href="https://www.orbidenti.com/order-resolve/3068">Skomponuj swój program</a>
            </p>
          </div>
        </div>
    );
  }
}

export default Agenda;
