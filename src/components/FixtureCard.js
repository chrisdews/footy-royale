import React from "react";
import { Button, Grid, Header } from "semantic-ui-react";

class FixtureCard extends React.Component {
  render() {
    return (
      <>
        <Grid
          columns={2}
          style={{ height: "3vh" }}
          textAlign="center"
          verticalAlign="middle"
        >
          <Grid.Column>{this.props.fixture.team_h}</Grid.Column>
          <Grid.Column>{this.props.fixture.team_a}</Grid.Column>
        </Grid>
      </>
    );
  }
}

export default FixtureCard;
