import React from "react";
import { Grid } from "semantic-ui-react";

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
            <div onClick={() => {this.clickHandlerHome(this.props.fixture)}}>
              {/* {this.props.fixture.team_h.name} */}
              <img src={ require(`../images/logos/${this.props.fixture.team_h.id}.png`) } alt="team logo" />
            </div>
          </Grid.Column>
          <Grid.Column width={1}>vs</Grid.Column>
          <Grid.Column width={5}>
            <div onClick={() => {this.clickHandlerAway(this.props.fixture)}}>
              {/* {this.props.fixture.team_a.name} */}
              <img src={ require(`../images/logos/${this.props.fixture.team_a.id}.png`) } alt="team logo" />
            </div>
          </Grid.Column>
        </Grid>
      </>
    );
  }
}

export default FixtureCard;
