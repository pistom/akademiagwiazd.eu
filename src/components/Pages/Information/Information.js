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
                <span>do 30 września 2018</span>
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
                <span>do 30 września 2018</span>
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
                <span>od 1 października do 14 listopada 2018</span>
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
                <span>od 15 listopada 2018</span>
              </div>
              <div className={[g["col-6"], g["col-sm-4"], g["col-xl-3"], c.Third].join(" ")}>
                <span>400 PLN</span>
              </div>
            </div>

            <div className={[g.row, c.Box].join(" ")} onClick={this.boxClickedHandler}>
              <div className={[g["col-12"], g["col-sm-4"], g["col-xl-3"], c.First].join(" ")}>
                STUDENCI <br/>
                4 MODUŁY
              </div>
              <div className={[g["col-6"], g["col-sm-4"], g["col-xl-3"], c.Second].join(" ")}>
                <span>do 31 października 2018</span>
              </div>
              <div className={[g["col-6"], g["col-sm-4"], g["col-xl-3"], c.Third].join(" ")}>
                <span>350 PLN</span>
              </div>
            </div>
          </div>
          <div className={g.container}>
            <h4 className="pageTitle">
              Hotel
            </h4>
            <div className={[g.row, c.Box2].join(" ")}>
              <div className={g.col}>
                <p>Rezerwacja na hasło <span className={c.Bold}>Akademia Gwiazd</span> na adres mailowy:
                <a href="mailto:reservation.andels-lodz@viennahouse.com"><span className={c.Red}>reservation.andels-lodz@viennahouse.com</span></a> lub telefonicznie <a
                  href="tel:+48422791521"><span className={c.Red}>42&nbsp;279&nbsp;15&nbsp;21/22</span></a></p>

                <p>Cena za pokój jednoosobowy ze śniadaniem 380 zł brutto z 8% VAT<br/>
                Cena za pokój dwuosobowy ze śniadaniem 420 zł brutto z 8% VAT</p>

                <p>Stawki obowiązują w dobie 30.11-01.12.2018.<br/>
                Pokoje udostępniane zgodnie z dostępnością.</p>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Information;
