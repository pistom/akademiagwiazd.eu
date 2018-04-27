import React, {Component} from 'react';
import getPageHeight from '../getPageHeight';
import c from './MainPage.css';
import g from 'bootstrap/dist/css/bootstrap-grid.min.css';
import Icon from './Icons/Icon/Icon';
import pen from '../../../assets/images/pen.svg';

class MainPage extends Component {

  state = {
    "program": {
      p1: {
        info: "godz. 10:00 - 13:00",
        icons: [
          {file: "01", panel: 'A', title: 'Implanty i tkanki miękkie', autor: 'dr RADOSŁAW JADACH'},
          {file: "03", panel: 'B', title: 'Kompozyty', autor: 'dr ALEKSANDER MAJ'},
          {file: "02", panel: 'C', title: 'DSD i ortodoncja', autor: 'dr n. med. BARTOSZ CERKASKI'},
          {file: "04", panel: 'D', title: 'Medycyna estetyczna', autor: 'dr n. med. LIDIA MAJEWSKA'}
        ]
      },
      p2: {
        info: "godz. 14:00 - 17:00",
        icons: [
          {file: "01", panel: 'A', title: 'Implanty i tkanki miękkie', autor: 'dr RADOSŁAW JADACH'},
          {file: "03", panel: 'B', title: 'Kompozyty', autor: 'dr ALEKSANDER MAJ'},
          {file: "02", panel: 'C', title: 'DSD i ortodoncja', autor: 'dr n. med. BARTOSZ CERKASKI'},
          {file: "04", panel: 'D', title: 'Medycyna estetyczna', autor: 'dr n. med. LIDIA MAJEWSKA'}
        ]
      },
      s1: {
        info: "godz. 10:00 - 13:00",
        icons: [
          {file: "01", panel: 'A', title: 'Implanty i tkanki miękkie', autor: 'prof. dr hab. MAŁGORZATA PIETRUSKA'},
          {file: "05", panel: 'B', title: 'Okluzja', autor: 'dr hab. n. med. JAN PIETRUSKI'},
          {file: "03", panel: 'C', title: 'Kompozyty', autor: 'DDS DDT IVAN RONALD HUANCA'},
          {file: "02", panel: 'D', title: 'DSD i ortodoncja', autor: 'dr n.med. MICHAŁ TARNAWSKI'}
        ]
      },
      s2: {
        info: "godz. 14:00 - 17:00",
        icons: [
          {file: "01", panel: 'A', title: 'Implanty i tkanki miękkie', autor: 'prof. dr hab. MAŁGORZATA PIETRUSKA'},
          {file: "05", panel: 'B', title: 'Okluzja', autor: 'dr hab. n. med. JAN PIETRUSKI'},
          {file: "01", panel: 'C', title: 'Implanty i tkanki miękkie', autor: 'dr hab. n. med. PIOTR MAJEWSKI'},
          {file: "02", panel: 'D', title: 'DSD i ortodoncja', autor: 'dr n.med. MICHAŁ TARNAWSKI'}
        ]
      },
    }
  };

  componentDidMount() {
    getPageHeight();
    setTimeout(() => {
      getPageHeight();
    }, 500)
  }

  catClickedHolder = () => {
    window.open("https://www.orbidenti.com/order-resolve/3068", "_blank");
  };

  render() {
    return (
        <div className={c.MainPage}>
          <div className={g.container}>
            <p className={c.Lead}>
              Sam tworzysz - sam wybierasz - sam komponujesz program
            </p>
            <h1 style={{margin: "10px auto 0"}}>PIĄTEK, 30.11.2018</h1>
            <h2>{this.state.program.p1.info}</h2>
            <div className={[g.row, c.Icons].join(" ")}>
              {this.state.program.p1.icons.map(icon => (
                  <Icon key={icon.id} file={icon.file} title={icon.title} author={icon.autor} panel={icon.panel}/>
              ))}
            </div>
            <h2>{this.state.program.p2.info}</h2>
            <div className={[g.row, c.Icons].join(" ")}>
              {this.state.program.p2.icons.map(icon => (
                  <Icon key={icon.id} file={icon.file} title={icon.title} author={icon.autor} panel={icon.panel}/>
              ))}
            </div>

            <h1 style={{margin: "10px auto 0"}}>SOBOTA, 1.12.2018</h1>
            <h2>{this.state.program.s1.info}</h2>
            <div className={[g.row, c.Icons].join(" ")}>
              {this.state.program.p1.icons.map(icon => (
                  <Icon key={icon.id} file={icon.file} title={icon.title} author={icon.autor} panel={icon.panel}/>
              ))}
            </div>
            <h2>{this.state.program.p2.info}</h2>
            <div className={[g.row, c.Icons].join(" ")}>
              {this.state.program.s2.icons.map(icon => (
                  <Icon key={icon.id} file={icon.file} title={icon.title} author={icon.autor} panel={icon.panel}/>
              ))}
            </div>


            <div className={g.row} style={{marginTop: "30px"}}>
              <div className={g["col-md-6"]}>
                <div className={c.Cta} onClick={this.catClickedHolder}>
                  <img src={pen} alt=""/> ZAPISZ SIĘ NA WYDARZENIE
                </div>
              </div>
              <div className={g["col-md-6"]}>
                Najwyższej jakości wiedza! Najlepsi wykładowcy!
              </div>
            </div>
            <p className={c.Lead2}>
              Moduł już od 240 zł przy WCZESNEJ REJESTRACJI do 30 czerwca 2018 r.
            </p>
          </div>
        </div>
    );
  }
}

export default MainPage;
