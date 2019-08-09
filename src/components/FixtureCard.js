import React from "react";
import { Grid } from "semantic-ui-react";

class FixtureCard extends React.Component {

  clickHandler = (team) => {
    this.props.teamSelector(team)
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
            <div onClick={() => {this.clickHandler(this.props.fixture.team_h)}}>
              {/* {this.props.fixture.team_h.name} */}
              <img src={ require(`../images/logos/${this.props.fixture.team_h.club_code}.png`) } />
            </div>
          </Grid.Column>
          <Grid.Column width={1}>vs</Grid.Column>
          <Grid.Column width={5}>
            <div onClick={() => {this.clickHandler(this.props.fixture.team_a)}}>
              {/* {this.props.fixture.team_a.name} */}
              <img src={ require(`../images/logos/${this.props.fixture.team_a.club_code}.png`) } />
            </div>
          </Grid.Column>
        </Grid>
      </>
    );
  }
}

export default FixtureCard;
