import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {AnimatedSwitch} from 'react-router-transition';
import './App.scss';
import Layout from '../components/Layout/Layout';
import MainPage from '../components/Pages/MainPage/MainPage';
import Agenda from '../components/Pages/Agenda/Agenda';
import Lectures from '../components/Pages/Lectures/Lectures';
import Information from '../components/Pages/Information/Information';
import Patrons from '../components/Pages/Patrons/Patrons';
import Contact from '../components/Pages/Contact/Contact';

class App extends Component {

  render() {
    return (
        <BrowserRouter>
          <Layout>
            <AnimatedSwitch
                atEnter={{ opacity: 0 }}
                atLeave={{ opacity: 0 }}
                atActive={{ opacity: 1 }}
                className="switch-wrapper"
            >
              <Route path="/" exact component={MainPage}/>
              <Route path="/program" exact component={Agenda}/>
              <Route path="/wykladowcy" exact component={Lectures}/>
              <Route path="/terminy-i-ceny" exact component={Information}/>
              <Route path="/partnerzy" exact component={Patrons}/>
              <Route path="/kontakt" exact component={Contact}/>
            </AnimatedSwitch>
          </Layout>
        </BrowserRouter>
    );
  }
}

export default App;
