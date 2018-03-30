import React from 'react';
import g from 'bootstrap/dist/css/bootstrap-grid.min.css';
import c from './Speaker.css';

class Speaker extends React.Component {
  state = {
    fot: null,
    descOpen: false,
  };

  componentDidMount() {
    if (this.props.fot) {
      import(`../../../../assets/images/speakers/${this.props.fot}`)
          .then(module => {
            setTimeout(() => {
              this.setState({fot: module})
            }, 10)
          });
    }
  }

  speakerClickedHandler = (state) => {
    this.setState({descOpen: state})
  };

  render() {
    const classes = (this.state.descOpen) ? [c.Desc, c.Open] : [c.Desc];
    const loader = (this.state.fot) ? [c.Loader, c.Load] : [c.Loader];
    return (
        <div className={[g["col-sm-6"], g["col-md-4"], c.SpeakerWrapper].join(" ")}>
          <div className={c.Speaker} onMouseLeave={() => this.speakerClickedHandler(false)}>
            <h4>{this.props.name}</h4>
            <div className={c.Foto} onClick={() => this.speakerClickedHandler(true)}>

              {this.state.fot ?
                  <img src={this.state.fot} alt={`Zdjęcie ${this.props.name}`}/> : null
              }
              <div className={loader.join(" ")}><div className={c["lds-dual-ring"]} /></div>
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
