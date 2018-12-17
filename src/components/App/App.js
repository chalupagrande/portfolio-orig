import React, { Component } from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from '../Home/Home'
import About from '../About/About'
import NoMatch from '../NoMatch/NoMatch'
import './App.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={About}/>
          <Route path='/about' exact component={Home}/>
          <Route component={NoMatch}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
