import React, {Component} from 'react';
import getPageHeight from "../getPageHeight";
import g from 'bootstrap/dist/css/bootstrap-grid.min.css';
import c from './Information.css';

class Information extends Component {
  componentDidMount(){
    getPageHeight();
    setTimeout(() => {
      getPageHeight();
    },500)
  }

  boxClickedHandler = () => {
    window.open('https://www.orbidenti.com/order-resolve/3068', "_blank")
  };

  render() {
    return (
        <div className={c.Information}>
          <div className={g.container}>
            <h4 className="pageTitle">
              Terminy i ceny
            </h4>
            <div className={[g.row, c.Box].join(" ")} onClick={this.boxClickedHandler}>
              <div className={[g["col-12"], g["col-sm-4"], g["col-xl-3"], c.First].join(" ")}>
                WCZESNA REJESTRACJA<br />
                4 MODUŁY
              </div>
              <div className={[g["col-6"], g["col-sm-4"], g["col-xl-3"], c.Second].join(" ")}>
                <span>do 30 czerwca 2018</span>
              </div>
              <div className={[g["col-6"], g["col-sm-4"], g["col-xl-3"], c.Third].join(" ")}>
                <span>960 PLN</span>
              </div>
            </div>

            <div className={[g.row, c.Box].join(" ")} onClick={this.boxClickedHandler}>
              <div className={[g["col-12"], g["col-sm-4"], g["col-xl-3"], c.First].join(" ")}>
                WCZESNA REJESTRACJA<br />
                1 MODUŁY
              </div>
              <div className={[g["col-6"], g["col-sm-4"], g["col-xl-3"], c.Second].join(" ")}>
                <span>do 30 czerwca 2018</span>
              </div>
              <div className={[g["col-6"], g["col-sm-4"], g["col-xl-3"], c.Third].join(" ")}>
                <span>320 PLN</span>
              </div>
            </div>

            <div className={[g.row, c.Box].join(" ")} onClick={this.boxClickedHandler}>
              <div className={[g["col-12"], g["col-sm-4"], g["col-xl-3"], c.First].join(" ")}>
                REJESTRACJA<br />
                1 MODUŁY
              </div>
              <div className={[g["col-6"], g["col-sm-4"], g["col-xl-3"], c.Second].join(" ")}>
                <span>od 1 lipca 2018 do 30 października 2018</span>
              </div>
              <div className={[g["col-6"], g["col-sm-4"], g["col-xl-3"], c.Third].join(" ")}>
                <span>370 PLN</span>
              </div>
            </div>

            <div className={[g.row, c.Box].join(" ")} onClick={this.boxClickedHandler}>
              <div className={[g["col-12"], g["col-sm-4"], g["col-xl-3"], c.First].join(" ")}>
                PÓŹNA REJESTRACJA<br />
                1 MODUŁY
              </div>
              <div className={[g["col-6"], g["col-sm-4"], g["col-xl-3"], c.Second].join(" ")}>
                <span>od 1 listopada 2018</span>
              </div>
              <div className={[g["col-6"], g["col-sm-4"], g["col-xl-3"], c.Third].join(" ")}>
                <span>400 PLN</span>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Information;
