import React, {Component} from 'react';
import getPageHeight from "../getPageHeight";

class Agenda extends Component {
  componentDidMount(){
    getPageHeight();
    setTimeout(() => {
      getPageHeight();
    },500)
  }

  render() {
    return [
      <h1 key="h1" style={{textAlign: "center", marginTop: "40px"}}>
        Program
      </h1>,
      <h3 key="h2" style={{textAlign: "center"}}>
        Zapraszamy wkrótce <br/>
      </h3>
    ];
  }
}

export default Agenda;
