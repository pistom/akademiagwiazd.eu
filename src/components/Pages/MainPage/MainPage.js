import React, {Component} from 'react';
import getPageHeight from '../getPageHeight';
import c from './MainPage.css';
import g from 'bootstrap/dist/css/bootstrap-grid.min.css';
import Icon from './Icons/Icon/Icon';
import pen from '../../../assets/images/pen.svg';

class MainPage extends Component {

  state = {
    "icons": [
      {id: 1, file: '01', title: 'Implanty i tkanki miękkie'},
      {id: 2, file: '02', title: 'DSD i ortodoncja'},
      {id: 3, file: '03', title: 'Kompozyty'},
      {id: 4, file: '04', title: 'Medycyna estetyczna'},
      {id: 5, file: '05', title: 'Okluzja'},
      {id: 6, file: '01', title: 'Implanty i tkanki miękkie'},
      {id: 7, file: '04', title: 'Medycyna estetyczna'},
      {id: 8, file: '05', title: 'Okluzja'},
      {id: 9, file: '01', title: 'Implanty i tkanki miękkie'},
      {id: 10, file: '02', title: 'DSD i ortodoncja'},
      {id: 11, file: '03', title: 'Kompozyty'},
      {id: 12, file: '04', title: 'Medycyna estetyczna'}
    ]
  };

  componentDidMount() {
    getPageHeight();
    setTimeout(() => {
      getPageHeight();
    },500)
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
          <div className={[g.row, c.Icons].join(" ")}>
            {this.state.icons.map(icon => (
                <Icon key={icon.id} file={icon.file} title={icon.title} />
            ))}
          </div>
          <div className={g.row}>
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
