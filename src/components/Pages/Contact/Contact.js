import React, {Component} from 'react';
import getPageHeight from "../getPageHeight";
import g from 'bootstrap/dist/css/bootstrap-grid.min.css';
import c from './Contact.css';
import logo from '../../../assets/images/ppz.svg';

class Contact extends Component {
  componentDidMount() {
    getPageHeight();
    setTimeout(() => {
      getPageHeight();
    }, 500)
  }

  render() {
    return (
        <div className={c.Contact}>
          <div className={g.container}>
            <h4 className="pageTitle" style={{textAlign: 'left'}}>
              Kontakt
            </h4>
            <img src={logo} alt="Pracownia Pozytywnych Zmian"/>
            <p><a href="mailto:szkolenia@pracowniapz.pl">szkolenia@pracowniapz.pl</a></p>
            <p><a href="http://www.pracowniapz.pl">www.pracowniapz.pl</a></p>
            <p><a href="tel:+48793199770">kom. +48 793 199 770</a></p>
          </div>
        </div>
    );
  }
}

export default Contact;
