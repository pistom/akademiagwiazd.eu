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
        [g["col-6"], g["col-sm-4"], g["col-md-3"], g["col-lg-2"]].join(" ") :
        null ;
    return (
        <div className={classes}>
          <div className={c.Icon}>
            <img src={this.state.img} alt={this.props.title}/>
            <div className={c.Title}>{this.props.title}</div>
          </div>
        </div>
    )
  }

};

export default icon;
