import React from 'react';
import grid from 'bootstrap/dist/css/bootstrap-grid.min.css';
import c from './FixedHeader.css';
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu'

class FixedHeader extends React.Component {

  state = {
    isHide: true,
    offsetY: 120
  };

  hideBar = () => {
    let {isHide, offsetY} = this.state;
    window.scrollY < offsetY ?
        !isHide && this.setState({isHide: true}) :
        isHide && this.setState({isHide: false});
  };

  setOffsetY = () => {
    const windowsWidth = window.innerWidth;
    let offsetY = 120;
    if (windowsWidth > 1200) {
      offsetY = 300;
    } else if (windowsWidth > 992) {
      offsetY = 250;
    } else if (windowsWidth > 768) {
      offsetY = 200;
    } else if (windowsWidth > 576) {
      offsetY = 160;
    }
    this.setState({offsetY})
  };

  componentDidMount() {
    window.addEventListener('scroll', this.hideBar);
    window.addEventListener('resize', this.setOffsetY);
    this.setOffsetY();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.hideBar);
    window.removeEventListener('resize', this.setOffsetY);
  }

  render() {
    let hide = this.state.isHide ? c.Hide : null;
    return (
        <nav className={[c.FixedHeader, hide].join(" ")}>
          <div className={grid.container}>
            <div className={grid.row}>
              <div className={grid["col-8"]}>
                <Logo isInFixedHeader/>
              </div>
              <div className={[grid["col-4"], c.right].join(" ")}>
                <Menu openMenu={this.props.openMenu}/>
              </div>
            </div>
          </div>
        </nav>
    )
  }
}

export default FixedHeader;
