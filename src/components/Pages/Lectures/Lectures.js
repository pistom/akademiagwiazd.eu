import React, {Component} from 'react';
import getPageHeight from "../getPageHeight";
import c from './Lectures.css';
import g from 'bootstrap/dist/css/bootstrap-grid.min.css';
import Speaker from './Speaker/Speaker';

class Lectures extends Component {

  state = {
    lectures: [
      {id: 1, name: "dr n. med. BARTOSZ CERKASKI", fot: 'cerkaski.jpg'},
      {id: 2, name: "DDS DDT IVAN RONALD HUANCA", fot: 'huanca.jpg'},
      {id: 3, name: "dr RADOSŁAW JADACH", fot: 'jadach.jpg'},
      {id: 4, name: "dr ALEKSANDER MAJ", fot: 'maj.jpg'},
      {id: 5, name: "dr n. med. LIDIA MAJEWSKA", fot: 'majewska.jpg'},
      {id: 6, name: "dr hab. n. med. PIOTR MAJEWSKI", fot: 'majewski.jpg'},
      {id: 7, name: "dr n.med. MICHAŁ TARNAWSKI", fot: 'tarnawski.jpg'},
      {id: 8, name: "prof. dr hab. MAŁGORZATA PIETRUSKA", fot: 'pietruska.jpg'},
      {id: 9, name: "dr hab. n. med. JAN PIETRUSKI", fot: 'pietruski.jpg'}
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
            <h4 className="pageTitle">Wykładowcy</h4>
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
