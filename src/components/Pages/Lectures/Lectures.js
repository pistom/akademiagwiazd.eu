import React, {Component} from 'react';
import getPageHeight from "../getPageHeight";
import c from './Lectures.css';
import g from 'bootstrap/dist/css/bootstrap-grid.min.css';
import Speaker from './Speaker/Speaker';

class Lectures extends Component {

  state = {
    lectures: [
      {id: 1, name: "dr n. med. BARTOSZ CERKASKI", fot: null},
      {id: 2, name: "DDS DDT IVAN RONALD HUANCA", fot: null},
      {id: 3, name: "dr RADOSŁAW JADACH", fot: null},
      {id: 4, name: "dr ALEKSANDER MAJ", fot: null},
      {id: 5, name: "dr n. med. LIDIA MAJEWSKA", fot: null},
      {id: 6, name: "dr hab. n. med. Piotr MAJEWSKI", fot: null},
      {id: 7, name: "dr n.med. Michał TARNAWSKI", fot: 'tarnawski.jpg'},
      {id: 8, name: "prof. dr hab. MAŁGORZATA PIETRUSKA", fot: null},
      {id: 9, name: "dr hab. n. med. JAN PIETRUSKI", fot: null}
    ]
  }

  componentDidMount() {
    getPageHeight();
    setTimeout(() => {
      getPageHeight();
    }, 500)
  }

  render() {
    return (
        <div className={c.Lectures}>
          <div className={g.container}>
            <h4 className="pageTitle">WYKŁADOWCY</h4>
            <div className={g.row}>
              {this.state.lectures.map(speaker => (
                  <Speaker key={speaker.id} name={speaker.name} fot={speaker.fot} />
              ))}
            </div>
          </div>
        </div>
    )
  }
}

export default Lectures;
