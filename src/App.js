import React from 'react';
import API from './adapters/API.js'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home'
import Game from './components/Game'

class App extends React.Component {

  state = {
    fixtures: [],
    
  }

  componentDidMount = () => {
    console.log('app mounted')
    this.fetchFixtures()
  }

  fetchFixtures = () => {
    return API.fetchFixtures().then(fixtures => this.setState({fixtures}))
  }

  render() { 
    return(
    <Router>
     <React.Fragment>
      <Route exact path='/' component={Home}/>
      <Route exact path='/game' render={(props) => <Game {...props}/>}/>
     </React.Fragment>
    </Router>
    )
  }
}

export default App;
