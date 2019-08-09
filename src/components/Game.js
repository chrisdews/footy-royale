import React from "react";
import { Grid, Header } from "semantic-ui-react";
import FixtureCard from "./FixtureCard";
import SelectedTeamCard from "./SelectedTeamCard";
import WaitingSelection from "./WaitingSelection"


const WaitingComponent = (condition, component) => condition ? component : <WaitingSelection />

class Game extends React.Component {
  state = {
  };

  teamSelector = team => {
    this.setState({ selectedTeam: team });
  };

  

  render() {
    const selectedTeam = this.state.selectedTeam;
    const allCurrentWeekData = this.props.allCurrentWeekData;
    return (
      <>
        <Grid
          columns={3}
          style={{ height: "10vh" }}
          textAlign="center"
          verticalAlign="middle"
        >
          <Grid.Column />
          <Grid.Column>
            <Header as="h1" textAlign="center">
              FOOTY ROYALE
            </Header>
            <Header as="h5" textAlign="center" className="footy-subtitle">
              {allCurrentWeekData.league.name}
            </Header>
          </Grid.Column>

          <Grid.Column />
        </Grid>

        <Grid
          columns={3}
          style={{ height: "90vh" }}
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
                teamSelector={this.teamSelector}
              />
            ))}
          </Grid.Column>
          <Grid.Column>
            <Header as="h1" textAlign="center">
              Your Selection
            </Header>

            {WaitingComponent(selectedTeam, <SelectedTeamCard selectedTeam={this.state.selectedTeam}/>)} 

          </Grid.Column>

          <Grid.Column>
            <Header as="h1" textAlign="center">
              The Surivors
            </Header>

            <Header as="h1" textAlign="center">
              The Fallen
            </Header>
          </Grid.Column>
        </Grid>
      </>
    );
  }
}

export default Game;
