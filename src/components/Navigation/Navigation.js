import React from 'react';
import c from './Navigation.css';
import Menu from '../../components/Header/Menu/Menu';
import grid from 'bootstrap/dist/css/bootstrap-grid.min.css';

class Navigation extends React.Component {

  state = {
    menuItems: [
      {name: "Home", path: '/'},
      {name: "Rejestracja", path: '/rejestracja'},
      {name: "Program", path: '/program'},
      {name: "Wykładowcy", path: '/wykladowcy'},
      {name: "Terminy i ceny", path: '/terminy-i-ceny'},
      {name: "Partnerzy", path: '/partnerzy'},
      {name: "Kontakt", path: '/kontakt'},
    ],
    menuIsFixed: false,
    offsetY: 120
  };

  fixMenu = () => {
    let {menuIsFixed, offsetY} = this.state;
    window.scrollY > offsetY ?
        !menuIsFixed && this.setState({menuIsFixed: true}) :
        menuIsFixed && this.setState({menuIsFixed: false});
  };

  setOffsetY = () => {
    const windowsWidth = window.innerWidth;
    let offsetY = 120;
    if (windowsWidth > 1200) {
      offsetY = 320;
    } else if (windowsWidth > 992) {
      offsetY = 254;
    } else if (windowsWidth > 768) {
      offsetY = 200;
    } else if (windowsWidth > 576) {
      offsetY = 145;
    }
    this.setState({offsetY})
  };

  componentDidMount() {
    window.addEventListener('scroll', this.fixMenu);
    window.addEventListener('resize', this.setOffsetY);
    this.setOffsetY();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.fixMenu);
    window.removeEventListener('resize', this.setOffsetY);
  }

  render(){
    const menuIsFixed = this.state.menuIsFixed ? c.Fixed : null;
    const isOpen = this.props.isOpen ? c.isOpen : null;
    return (
        <div className={[c.Navigation, c[this.props.type], menuIsFixed, isOpen].join(" ")}>
          <Menu openMenu={this.props.openMenu} white/>
          <div className={[c[this.props.type], grid.container].join(" ")}>
            {this.state.menuItems.map(item => (
                <a key={item.name} href={item.path}>{item.name}</a>
            ))}
          </div>
        </div>
    )
  }
};

export default Navigation;
