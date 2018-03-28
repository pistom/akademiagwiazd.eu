import React from 'react';
import g from 'bootstrap/dist/css/bootstrap-grid.min.css';
import c from './Speaker.css';

class Speaker extends React.Component {
  state = {
    fot: null
  };

  componentDidMount() {
    if (this.props.fot) {
      import(`../../../../assets/images/speakers/${this.props.fot}`)
          .then(module => {
            this.setState({fot: module})
          });
    }
  }

  render() {
    return (
        <div className={[g["col-sm-6"], g["col-md-4"]].join(" ")}>
          <div className={c.Speaker}>
            <h4>{this.props.name}</h4>
            <div className={c.Foto}>
              {this.state.fot ?
                  <img src={this.state.fot} alt={`Zdjęcie ${this.props.name}`}/> : null
              }
            </div>

          </div>
        </div>
    )
  }
}

export default Speaker;
