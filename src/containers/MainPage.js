import React, {Component} from 'react';

class MainPage extends Component {
  render() {
    return [
      <h1 key="h1" style={{textAlign: "center", marginTop: "40px"}}>
        Strona w budowie
      </h1>,
      <h3 key="h2" style={{textAlign: "center"}}>
        Zapraszamy wkrótce
      </h3>

    ];
  }
}

export default MainPage;
