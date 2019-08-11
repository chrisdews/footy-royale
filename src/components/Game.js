import React from "react";
import { Grid, Header } from "semantic-ui-react";
import FixtureCard from "./FixtureCard";
import SelectedTeamCard from "./SelectedTeamCard";
import WaitingSelection from "./WaitingSelection";
import User from "./User";
import PreviousPredictionsCard from "./PreviousPredictionsCard"
import API from "../adapters/API";


const WaitingComponent = (condition, component) => condition ? component : <WaitingSelection />

class Game extends React.Component {
  state = {
    logged_in_user: {id: 1, name: 'Dewsy'}
  };
  // user is temporary until logins sorted

  teamSelectorHome = (fixture) => {
    this.setState({ selectedTeam: fixture.team_h, fixture: fixture});
  };

  teamSelectorAway = (fixture) => {
    this.setState({ selectedTeam: fixture.team_a, fixture: fixture});
  };

  postPrediction = () => {
    console.log('hi from click')
    
    const newPredictionObj = {
      'match_id': this.state.fixture.id,
      'team_id': this.state.selectedTeam.id,
      'user_id': this.state.logged_in_user.id,
      'league_id': this.props.allCurrentWeekData.league.id,
      'royale_round': this.props.allCurrentWeekData.league.round_number
    }
    console.log(newPredictionObj)
    API.postPrediction(newPredictionObj).then(currentPrediction => this.setState({currentPrediction}))

  }

  

  render() {
    const selectedTeam = this.state.selectedTeam;
    const allCurrentWeekData = this.props.allCurrentWeekData;
    return (
      <>
        <Grid
          columns={3}
          style={{ height: "15vh" }}
          textAlign="center"
          verticalAlign="middle"
        >
          <Grid.Column />
          <Grid.Column>
            <Header as="h1" textAlign="center">
              FOOTY ROYALE
            </Header>
            <Header as="h3" textAlign="center" className="footy-subtitle">
              {allCurrentWeekData.league.name}
            </Header>
            <Header as="h4" textAlign="center" className="footy-subtitle">
              ROUND {allCurrentWeekData.league.round_number}
            </Header>


          </Grid.Column>

          <Grid.Column />
        </Grid>

        <Grid
          columns={3}
          style={{ height: "85vh" }}
          textAlign="center"
          verticalAlign="top"
        >
          <Grid.Column>
            <Header as="h1" textAlign="center">
              Upcoming Fixtures
            </Header>
            {allCurrentWeekData.league.current_matches.map(fixture => (
              <FixtureCard
                key={fixture.id}
                fixture={fixture}
                teamSelectorHome={this.teamSelectorHome}
                teamSelectorAway={this.teamSelectorAway}
              />
            ))}
          </Grid.Column>
          <Grid.Column>
            <Header as="h1" textAlign="center">
              Your Selection
            </Header>
              <Grid.Row>
            {WaitingComponent(selectedTeam, <SelectedTeamCard selectedTeam={this.state.selectedTeam} postPrediction={this.postPrediction} currentPrediction={this.state.currentPrediction}/>)} 
            </Grid.Row>

            <Grid.Row>
            <Header as="h1" textAlign="center">
              Your Previous Selections
            </Header>
              {allCurrentWeekData.league.map(key => (
              <PreviousPredictionsCard
                
                prediction={key.user_predictions}
                teams={key.}
              />
            ))}
            </Grid.Row>

          </Grid.Column>

          <Grid.Column>
            <Header as="h1" textAlign="center">
              The Survivors
            </Header>
              {allCurrentWeekData.league.active_users.map(user => <User user={user}/>)}

            <Header as="h1" textAlign="center">
              The Fallen
            </Header>
            {allCurrentWeekData.league.inactive_users.map(user => <User user={user}/>)}
          </Grid.Column>
        </Grid>
      </>
    );
  }
}

export default Game;
