import React from 'react';
import API from './adapters/API.js'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home'
import Game from './components/Game'
import Loading from './components/Loading';
import UpdateRound from './components/UpdateRound'


const LazyComponent = (condition, component) => condition ? 
component
: <Loading />

class App extends React.Component {

  state = {
    allCurrentWeekData: null

    
  }

  componentDidMount = () => {
    console.log('app mounted')
    this.fetchAllCurrentWeekData()
  }

  fetchAllCurrentWeekData = () => {
    return API.fetchAllData().then(allCurrentWeekData => this.setState({allCurrentWeekData}))
  }

  // leagueFilter = () => {
  //   return this.state.allCurrentWeekData.filter()
  // }

  render() { 
    const allCurrentWeekData = this.state.allCurrentWeekData

    return(
    <Router>
     <React.Fragment>
      <Route exact path='/' component={Home}/>
      <Route exact path='/game' render={props => LazyComponent(allCurrentWeekData, <Game {...props} allCurrentWeekData={allCurrentWeekData}/>)}/>
      <Route exact path='/update' render={props => LazyComponent(allCurrentWeekData, <UpdateRound {...props} allCurrentWeekData={allCurrentWeekData}/>)} />
     </React.Fragment>
    </Router>
    )
  }
}

export default App;
