import React from 'react';
import API from './adapters/API.js'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home'
import Game from './components/Game'

class App extends React.Component {

  state = {
    fixtures: [],
    teams: [],
    premGameWeek: 3
    
  }

  componentDidMount = () => {
    console.log('app mounted')
    this.fetchFixtures()
    this.fetchTeams()
  }

  fetchFixtures = () => {
    return API.fetchFixtures().then(fixtures => this.setState({fixtures}))
  }

  fetchTeams = () => {
    return API.fetchTeams().then(teams => this.setState({teams}))
  }

  thisWeekFixtureFilter = () => {
    return this.state.fixtures.filter(fixture => fixture.event === this.state.premGameWeek)
  }

  render() { 
    const thisWeekFixtures = this.thisWeekFixtureFilter()

    return(
    <Router>
     <React.Fragment>
      <Route exact path='/' component={Home}/>
      <Route exact path='/game' render={props => <Game {...props} fixtures={thisWeekFixtures}/>}/>
     </React.Fragment>
    </Router>
    )
  }
}

export default App;
