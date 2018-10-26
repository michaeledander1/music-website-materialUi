import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import TopBar from './Layout/TopBar'
import Footer from './Layout/Footer'
import Main from './Components/Main'
import Transcriptions from './Components/Transcriptions';
import Music from './Components/Music'
import Biography from './Components/Biography'
import Contact from './Components/Contact'
import Gigs from './Components/Gigs'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <TopBar />
        <body>
          <Route exact path="/" component={Main}/>
          <Route path="/transcriptions" component={Transcriptions}/>
          <Route path="/music" component={Music}/>
          <Route path="/biography" component={Biography}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/gigs" component={Gigs}/>
        </body>
        <Footer />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
