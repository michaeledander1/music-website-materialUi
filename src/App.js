import React, { Component } from 'react';
import './App.css';
import TopBar from './Layout/TopBar'
import Footer from './Layout/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar />
        Hello
        <Footer />
      </div>
    );
  }
}

export default App;
