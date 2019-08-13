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

      const homeTeamId = this.props.fixture.team_h.id
      const awayTeamId = this.props.fixture.team_a.id
      const previousUserPredictions = this.props.previousUserPredictions.map(pred => pred.team_id)

      const homeTeamGrey = previousUserPredictions.includes(homeTeamId)
      const awayTeamGrey = previousUserPredictions.includes(awayTeamId)

    return (
      <>
        <Grid
          columns={7}
          style={{ minHeight: "4vh" }}
          textAlign="center"
          verticalAlign="middle"
        >
          <Grid.Column width={5}>
            <Button
              onClick={
                homeTeamGrey
                  ? {}
                  : () => {
                      this.clickHandlerHome(this.props.fixture);
                    }
              }
              style={homeTeamGrey ? { filter: "grayscale(100%)", opacity: '0.3' } : {}}
            >
              <img
                src={require(`../images/logos/${
                  this.props.fixture.team_h.id
                }.png`)}
                alt="team logo"
              />
            </Button>
          </Grid.Column>
          <Grid.Column width={1}>
            <h3>{this.props.fixture.team_h_score}</h3> vs{" "}
            <h3>{this.props.fixture.team_a_score}</h3>
          </Grid.Column>
          <Grid.Column width={5}>
            <Button
              onClick={
                awayTeamGrey
                  ? {}
                  :
              () => {
                this.clickHandlerAway(this.props.fixture);
              }} 
              style={awayTeamGrey ? { filter: "grayscale(100%)", opacity: '0.3'} : {}}
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
