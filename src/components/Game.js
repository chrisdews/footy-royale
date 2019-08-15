import React from "react";
import { Grid, Header, Button } from "semantic-ui-react";
import FixtureCard from "./FixtureCard";
import SelectedTeamCard from "./SelectedTeamCard";
import WaitingSelection from "./WaitingSelection";
import User from "./User";
import PreviousPredictionsContainer from "./PreviousPredictionsContainer";
import API from "../adapters/API";

const WaitingComponent = (condition, component) =>
  condition ? component : <WaitingSelection />;

class Game extends React.Component {
  state = {
    // logged_in_user: { id: 1, name: "Dewsy" },
    previousUserPredictions: [],
    userActive: "waiting", 
  };
  // user is temporary until logins sorted

  componentDidMount = () => {
    this.setState({
      previousUserPredictions: this.props.allCurrentWeekData.league
        .user_predictions
      // currentPredictionPersist: this.props.allCurrentWeekData.league.user_predictions.find(
      //   pred => pred.royale_round === 1
      // ),

      // sets state of current prediction so can show persisting prediction on log in.
      // set this to equal royale round later
      // NOT WORKING YET
    });
  };

  teamSelectorHome = fixture => {
    this.setState({ selectedTeam: fixture.team_h, fixture: fixture });
  };

  teamSelectorAway = fixture => {
    this.setState({ selectedTeam: fixture.team_a, fixture: fixture });
  };

  postPrediction = () => {
    console.log("hi from click");

    const newPredictionObj = {
      match_id: this.state.fixture.id,
      team_id: this.state.selectedTeam.id,
      user_id: this.props.currentUser.user.id,
      league_id: this.props.allCurrentWeekData.league.id,
      royale_round: this.props.allCurrentWeekData.league.round_number
    };

    // if this.state.previousUserPredictions contains predictions with royale_round, do a patch instead of post.
    // or maybe do this backend with first_or_create ruby
    // if prediction has already been submitted, offer another link to PATCH
    API.postPrediction(newPredictionObj).then(currentPrediction =>
      this.setState({
        previousUserPredictions: [
          ...this.state.previousUserPredictions,
          currentPrediction
        ]
      })
    );
  };

  render() {
    const selectedTeam = this.state.selectedTeam;
    const previousUserPredictions = this.state.previousUserPredictions;
    const allCurrentWeekData = this.props.allCurrentWeekData;
    const userActive = this.props.allCurrentWeekData.league.user_league_current_user[0].user_active;
    const currentUserId = this.props.allCurrentWeekData.league.user_league_current_user[0].id

    return (
      <>
        <Grid
          columns={3}
          style={{ height: "15vh" }}
          textAlign="center"
          verticalAlign="middle"
        >
          <Grid.Column>
            Logged in: {currentUser.username}
            <br />
            <br />
            {userActive
              ? "FOOTY ROYALE continues for you. For now."
              : "You were defeated."}
            <br />
            {currentUserId === 1 ? (
              <Button href="/update">Add Results </Button>
            ) : null}
          </Grid.Column>
          <Grid.Column>
            <Header as="h1" textAlign="center">
              FOOTY ROYALE
            </Header>
            <Header as="h3" textAlign="center" className="text-yellow" >
              {allCurrentWeekData.league.name}
            </Header>
            <Header as="h4" textAlign="center" className="text-yellow">
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
              Week {allCurrentWeekData.league.current_week} Fixtures
            </Header>

            {WaitingComponent(
              allCurrentWeekData,
              allCurrentWeekData.league.current_matches.map(fixture => (
                <FixtureCard
                  key={fixture.id}
                  fixture={fixture}
                  teamSelectorHome={this.teamSelectorHome}
                  teamSelectorAway={this.teamSelectorAway}
                  previousUserPredictions={this.state.previousUserPredictions}
                />
              ))
            )}
          </Grid.Column>
          <Grid.Column>
            <Header as="h1" textAlign="center">
              Your Selection
            </Header>

            {userActive ? (
              <Grid.Row>
                {WaitingComponent(
                  selectedTeam,

                  <SelectedTeamCard
                    selectedTeam={this.state.selectedTeam}
                    postPrediction={this.postPrediction}
                    currentPrediction={this.state.currentPrediction}
                  />
                )}
              </Grid.Row>
            ) : (
              <div> YOU ARE OUT OF THE GAME </div>
            )}
            {console.log(this.state.userActive)}

            <Grid.Row>
              <Header as="h1" textAlign="center">
                Your Previous Selections
              </Header>

              {WaitingComponent(
                previousUserPredictions,
                <PreviousPredictionsContainer
                  allCurrentWeekData={allCurrentWeekData}
                  previousUserPredictions={previousUserPredictions}
                />
              )}
            </Grid.Row>
          </Grid.Column>

          <Grid.Column>
            <Header as="h1" textAlign="center">
              The Survivors
            </Header>
            {allCurrentWeekData.league.active_users.map(user => (
              <User user={user} />
            ))}

            <Header as="h1" textAlign="center">
              The Fallen
            </Header>
            {allCurrentWeekData.league.inactive_users.map(user => (
              <User user={user} />
            ))}
          </Grid.Column>
        </Grid>
      </>
    );
  }
}

export default Game;
