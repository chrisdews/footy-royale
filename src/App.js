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
    allCurrentWeekData: null
  };

  componentDidMount = () => {
    console.log("app mounted");
    this.fetchAllCurrentWeekData();
  };

  fetchAllCurrentWeekData = () => {
    return API.fetchAllData().then(allCurrentWeekData =>
      this.setState({ allCurrentWeekData })
    );
  };

  updateLeagueRound = () => {
    let newRoundNum = this.state.allCurrentWeekData.league.round_number + 1;
    const leagueObj = {
      id: this.state.allCurrentWeekData.league.id,
      round_number: newRoundNum
    }
    API.updateRound(leagueObj).then(allCurrentWeekData => this.setState({ allCurrentWeekData })
    );
  };

  reverseLeagueRound = () => {
    let newRoundNum = this.state.allCurrentWeekData.league.round_number - 1;
    const leagueObj = {
      id: this.state.allCurrentWeekData.league.id,
      round_number: newRoundNum
    }
    API.updateRound(leagueObj).then(allCurrentWeekData => this.setState({ allCurrentWeekData })
    );
  }



  render() {
    const allCurrentWeekData = this.state.allCurrentWeekData;

    return (
      <Router>
        <React.Fragment>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/game"
            render={props =>
              LazyComponent(
                allCurrentWeekData,
                <Game {...props} allCurrentWeekData={allCurrentWeekData} />
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
