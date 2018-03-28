import React, {Component} from 'react';
import getPageHeight from "../getPageHeight";
import g from 'bootstrap/dist/css/bootstrap-grid.min.css';
import c from './Agenda.css';

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
            <h1>Już niebawem :)</h1>
          </div>
        </div>
    );
  }
}

export default Agenda;
