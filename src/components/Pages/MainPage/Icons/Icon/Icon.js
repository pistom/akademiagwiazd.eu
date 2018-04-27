import React from 'react';

import g from 'bootstrap/dist/css/bootstrap-grid.min.css';
import c from './Icon.css';

class icon extends React.Component {
  state = {
    img: null
  };

  componentDidMount() {
    import(`../../../../../assets/images/icons/${this.props.file}.svg`)
        .then(module => {
          this.setState({img: module})
        });
  }

  render() {
    const classes = (!this.props.agenda) ?
        [g["col-6"], g["col-sm-6"], g["col-md-3"], g["col-lg-3"]].join(" ") :
        null;
    const loader = (this.state.img) ? [c.Loader, c.Load] : [c.Loader];
    return (
        <div className={classes}>
          <div className={c.Icon}>
            <div className={loader.join(" ")}>
              <div className={c["lds-dual-ring"]}/>
            </div>
            <img src={this.state.img} alt={this.props.title}/>
            <div className={c.Title}>
              <p style={{color: "black", fontSize: ".75em", margin: "0" }}>Panel {this.props.panel}</p>
              {this.props.title}
              <p style={{color: "black", fontSize: ".75em", margin: "0" }}>{this.props.author}</p>
            </div>
          </div>
        </div>
    )
  }

};

export default icon;
