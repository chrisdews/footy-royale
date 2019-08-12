import React from "react";
import { Grid, Button } from "semantic-ui-react";

class FixtureCard extends React.Component {

  clickHandlerHome = (fixture) => {
    console.log(fixture)
    this.props.teamSelectorHome(fixture)
  }

  clickHandlerAway = (fixture) => {
    console.log(fixture)
    this.props.teamSelectorAway(fixture)
  }


  render() {
    return (
      <>
        <Grid
          columns={7}
          style={{ minHeight: "4vh" }}
          textAlign="center"
          verticalAlign="middle"
        >
          <Grid.Column width={5}>
            <Button onClick={() => {this.clickHandlerHome(this.props.fixture)}}>
              
              <img src={ require(`../images/logos/${this.props.fixture.team_h.id}.png`) } alt="team logo" />
              
            </Button>
          </Grid.Column>
          <Grid.Column width={1}><h3>{this.props.fixture.team_h_score}</h3> vs <h3>{this.props.fixture.team_a_score}</h3></Grid.Column>
          <Grid.Column width={5}>
            <Button onClick={() => {this.clickHandlerAway(this.props.fixture)}}>
              
              <img src={ require(`../images/logos/${this.props.fixture.team_a.id}.png`) } alt="team logo" />
              
            </Button>
          </Grid.Column>
        </Grid>
      </>
    );
  }
}

export default FixtureCard;
