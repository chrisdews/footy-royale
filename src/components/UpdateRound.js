import React, { Component } from "react";
import { Grid, Header, Button, Form, Divider } from "semantic-ui-react";

class UpdateRound extends Component {
  state = {};

  componentDidMount = () => {
    this.setState({
      current_matches: this.props.allCurrentWeekData.league.current_matches
    });
  };

  render() {
    return (
      <Grid
        columns={3}
        style={{ height: "85vh" }}
        textAlign="center"
        verticalAlign="top"
      >
        <Grid.Column>
          <Header as="h1" textAlign="center">
            Current Fixtures
          </Header>
          <Form size="small" key="small">
            {this.props.allCurrentWeekData.league.current_matches.map(
              fixture => (
                <>
                  <Form.Group>
                    <Form.Field label={fixture.team_h.short_name} control="input" />
                    <Form.Field label={fixture.team_a.short_name} control="input" />
                  </Form.Group>
                </>
              )
            )}
            <Button type="submit">Submit</Button>
            <Divider hidden />
          </Form>
        </Grid.Column>
        <Grid.Column>
        <Button type="submit">Update game to next round</Button>
        </Grid.Column>
      </Grid>
    );
  }
}

export default UpdateRound;
