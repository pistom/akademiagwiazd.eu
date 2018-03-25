import React, {Fragment} from 'react';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import c from './Layout.css';

class Layout extends React.Component {

  state = {
    menuIsFixed: false,
    offsetY: 120,
    isOpenMenu: false
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

  openMenu = () => {
    this.setState((prev, next) => {
      return {isOpenMenu: !prev.isOpenMenu}
    })
  }

  render() {
    const menuIsFixed = this.state.menuIsFixed ? c.Fixed : null;
    return (
        <Fragment>
          <Header openMenu={this.openMenu}/>
          <Navigation type="Mobile" isOpen={this.state.isOpenMenu} openMenu={this.openMenu}/>
          <Navigation type="Main"/>
          <main className={menuIsFixed}>
            {this.props.children}
            <div style={{height: "2000px"}}/>
          </main>
        </Fragment>
    )
  }
}

export default Layout;
