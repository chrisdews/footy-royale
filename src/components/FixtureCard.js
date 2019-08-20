import React from "react";
import { Grid, Button } from "semantic-ui-react";

class FixtureCard extends React.Component {
  state = {
    homeTeamGrey: true,
    awayTeamGrey: false
  };

  clickHandlerHome = fixture => {
    // console.log(fixture);
    this.props.teamSelectorHome(fixture);
  };

  clickHandlerAway = fixture => {
    // console.log(fixture);
    this.props.teamSelectorAway(fixture);
  };

  render() {
    const homeTeamId = this.props.fixture.team_h.id;
    const awayTeamId = this.props.fixture.team_a.id;
    const previousUserPredictions = this.props.previousUserPredictions.map(
      pred => pred.team_id
    );

    const homeTeamGrey = previousUserPredictions.includes(homeTeamId);
    const awayTeamGrey = previousUserPredictions.includes(awayTeamId);
    // console.log(homeTeamGrey, awayTeamGrey, homeTeamId, awayTeamId, previousUserPredictions)

    return (
      <>
        <Grid
          columns={12}
          style={{ minHeight: "4vh" }}
          textAlign="center"
          verticalAlign="middle"
          className="fixtures-container"
        >
          <Grid.Column width={4}>
            <Button
             color='yellow'
             disabled={homeTeamGrey}
             className="fixture-team-button"
              
              onClick={
                homeTeamGrey
                  ? {}
                  : () => {
                      this.clickHandlerHome(this.props.fixture);
                    }
              }
              
            >
              <img
                src={require(`../images/logos/${
                  this.props.fixture.team_h.id
                }.png`)}
                alt="team logo"
              />
            </Button>
          </Grid.Column>
          <Grid.Column width={4}>
          <div>
            <span className="score-number">{this.props.fixture.team_h_score} </span><span className="vs-text">vs</span><span className="score-number"> {this.props.fixture.team_a_score}</span>
          
            </div>
            </Grid.Column>
          <Grid.Column width={4}>
            <Button
            className="fixture-team-button"
              color="yellow"
              onClick={
                awayTeamGrey
                  ? {}
                  : () => {
                      this.clickHandlerAway(this.props.fixture);
                    }
              }
              disabled={awayTeamGrey}
              
            >
              <img
                src={require(`../images/logos/${
                  this.props.fixture.team_a.id
                }.png`)}
                alt="team logo"
              />
            </Button>
          </Grid.Column>
        </Grid>
      </>
    );
  }
}

export default FixtureCard;
