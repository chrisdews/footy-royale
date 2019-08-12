import React, { Component } from "react";
import { Grid, Header, Button, Form, Divider } from "semantic-ui-react";
import API from "../adapters/API";

class UpdateRound extends Component {
  state = {
    match_id: "",
    team_h_score: "",
    team_a_score: ""
  };

  componentDidMount = () => {
    this.setState({
      current_matches: this.props.allCurrentWeekData.league.current_matches
    });
  };

  handleHomeChange = e => {
    let score = e.target.value;
    let id = e.target.id;
    this.setState({ match_id: id, team_h_score: score });
  };

  handleAwayChange = e => {
    let score = e.target.value;
    this.setState({ team_a_score: score });
  };

  handleSubmitScore = e => {
    e.preventDefault();
    let submitScoreObj = {
      id: this.state.match_id,
      team_h_score: this.state.team_h_score,
      team_a_score: this.state.team_a_score
    };
    console.log(submitScoreObj);
    API.submitScore(submitScoreObj);
  };

  handleClickUpdate = e => {
    e.preventDefault();
    this.props.updateLeagueRound();
  };

  handleClickRemoveUpdate = e => {
    e.preventDefault();
    this.props.reverseLeagueRound();
  };

  render() {
    return (
      <Grid
        columns={3}
        style={{ height: "100vh" }}
        textAlign="center"
        verticalAlign="center"
      >
        <Grid.Column>
          <Header as="h1" textAlign="center">
            Current Fixtures
          </Header>

          {this.props.allCurrentWeekData.league.current_matches.map(fixture => (
            <>
              <Form size="small" key="small" onSubmit={this.handleSubmitScore}>
                <Form.Group>
                  <Form.Field
                    label={fixture.team_h.short_name}
                    id={fixture.id}
                    control="input"
                    placeholder={fixture.team_h_score}
                    onChange={this.handleHomeChange}
                  />
                  <Form.Field
                    label={fixture.team_a.short_name}
                    id={fixture.id}
                    control="input"
                    placeholder={fixture.team_a_score}
                    onChange={this.handleAwayChange}
                  />
                  <Button type="submit" value="submit">
                    Submit
                  </Button>
                </Form.Group>
                <Divider hidden />
              </Form>
            </>
          ))}
        </Grid.Column>
        <Grid.Column>
          <Divider hidden />
          <Button onClick={this.handleClickUpdate}>
            Update game to next round
          </Button>
          <div>
            Current round Number:{" "}
            {this.props.allCurrentWeekData.league.round_number}
          </div>
          <Divider hidden />
          <Button onClick={this.handleClickRemoveUpdate}>
            Take game back to last round
          </Button>
          <Divider hidden />
          <Button href="/game" type="submit">
            Return to game
          </Button>
        </Grid.Column>
      </Grid>
    );
  }
}

export default UpdateRound;
