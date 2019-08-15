import React from "react";
import { Grid, Button } from "semantic-ui-react";

class FixtureCard extends React.Component {
  state = {
    homeTeamGrey: true,
    awayTeamGrey: false
  };

  clickHandlerHome = fixture => {
    console.log(fixture);
    this.props.teamSelectorHome(fixture);
  };

  clickHandlerAway = fixture => {
    console.log(fixture);
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
    console.log(homeTeamGrey, awayTeamGrey, homeTeamId, awayTeamId, previousUserPredictions)

    return (
      <>
        <Grid
          columns={12}
          style={{ minHeight: "4vh" }}
          textAlign="center"
          verticalAlign="middle"
        >
          <Grid.Column width={5}>
            <Button
             color='yellow'
             disabled={homeTeamGrey}
              
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
          <Grid.Column width={2}>
            <span>{this.props.fixture.team_h_score} vs {this.props.fixture.team_a_score}</span>
          </Grid.Column>
          <Grid.Column width={5}>
            <Button
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
