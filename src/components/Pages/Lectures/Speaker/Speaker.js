import React from 'react';
import g from 'bootstrap/dist/css/bootstrap-grid.min.css';
import c from './Speaker.css';

class Speaker extends React.Component {
  state = {
    fot: null,
    descOpen: false
  };

  componentDidMount() {
    if (this.props.fot) {
      import(`../../../../assets/images/speakers/${this.props.fot}`)
          .then(module => {
            this.setState({fot: module})
          });
    }
  }

  speakerClickedHandler = (state) => {
    this.setState({descOpen: state})
  };

  render() {
    const classes = (this.state.descOpen) ? [c.Desc, c.Open] : [c.Desc];

    return (
        <div className={[g["col-sm-6"], g["col-md-4"], c.SpeakerWrapper].join(" ")}>
          <div className={c.Speaker} onMouseLeave={() => this.speakerClickedHandler(false)}>
            <h4>{this.props.name}</h4>
            <div className={c.Foto} onClick={() => this.speakerClickedHandler(true)}>
              {this.state.fot ?
                  <img src={this.state.fot} alt={`Zdjęcie ${this.props.name}`}/> : null
              }

            </div>
            <div className={classes.join(" ")} onClick={() => this.speakerClickedHandler(false)}>
              <h3>{this.props.name}</h3>
              {this.props.desc}
            </div>

          </div>
        </div>
    )
  }
}

export default Speaker;
