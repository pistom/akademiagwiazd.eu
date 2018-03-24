import React, { Component } from 'react';
import './App.scss';
import Layout from '../components/Layout/Layout';
import MainPage from './MainPage';

class App extends Component {
  render() {

    return (
      <Layout>
        <MainPage/>
      </Layout>
    );
  }
}

export default App;
