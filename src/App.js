import React from "react";
import API from "./adapters/API.js";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./components/Home";
import Game from "./components/Game";
import Loading from "./components/Loading";
import UpdateRound from "./components/UpdateRound";

const LazyComponent = (condition, component) =>
  condition ? component : <Loading />;

class App extends React.Component {
  state = {
    allCurrentWeekData: null,
    currentUser: null
  };

  setLoggedInUser = user => {
    this.setState({ currentUser: user }, () => {
      this.fetchAllCurrentWeekData();
    });
  };


  componentDidMount = () => {
    console.log("app mounted");
    API.validateUser()
    .then(data => {
      if (data.error) {
        console.error(data.error)
        // display some error
        this.props.history.push('/login')
      } else {
        this.setState({ currentUser: data }, () => {
          this.fetchAllCurrentWeekData();
        });
        // this.props.history.push('/dashboard')
      }
    })
  };

  fetchAllCurrentWeekData = () => {
    return API.fetchAllData().then(allCurrentWeekData =>
      this.setState({ allCurrentWeekData })
    );
  };

  updateLeagueRound = () => {
    let newRoundNum = this.state.allCurrentWeekData.league.round_number + 1;
    let newWeekNum = this.state.allCurrentWeekData.league.current_week + 1;
    const leagueObj = {
      id: this.state.allCurrentWeekData.league.id,
      round_number: newRoundNum,
      current_week: newWeekNum
    };
    API.updateRound(leagueObj).then(allCurrentWeekData =>
      this.setState({ allCurrentWeekData })
    );
  };

  reverseLeagueRound = () => {
    let newRoundNum = this.state.allCurrentWeekData.league.round_number - 1;
    let newWeekNum = this.state.allCurrentWeekData.league.current_week - 1;
    const leagueObj = {
      id: this.state.allCurrentWeekData.league.id,
      round_number: newRoundNum,
      current_week: newWeekNum
    };
    API.updateRound(leagueObj).then(allCurrentWeekData =>
      this.setState({ allCurrentWeekData })
    );
  };

  render() {
    const allCurrentWeekData = this.state.allCurrentWeekData;

    return (
      <Router>
        <React.Fragment>
          <Route
            exact
            path="/"
            render={props =>
              LazyComponent(
                true,
                <Home {...props} setLoggedInUser={this.setLoggedInUser}/>
              )
            }
            
          />

<Route
            exact
            path="/login"
            render={props =>
              LazyComponent(
                true,
                <Home {...props} setLoggedInUser={this.setLoggedInUser}/>
              )
            }
            
          />
          <Route
            exact
            path="/game"
            render={props =>
              LazyComponent(
                allCurrentWeekData,
                <Game {...props} allCurrentWeekData={allCurrentWeekData} currentUser={this.state.currentUser} />
              )
            }
          />
          <Route
            exact
            path="/update"
            render={props =>
              LazyComponent(
                allCurrentWeekData,
                <UpdateRound
                  {...props}
                  allCurrentWeekData={allCurrentWeekData}
                  updateLeagueRound={this.updateLeagueRound}
                  reverseLeagueRound={this.reverseLeagueRound}
                />
              )
            }
          />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
