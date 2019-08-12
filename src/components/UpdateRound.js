import React, { Component } from "react";
import { Grid, Header, Button, Form, Divider } from "semantic-ui-react";
import API from "../adapters/API";


class UpdateRound extends Component {
  state = {
    match_id: '',
    team_h_score: '',
    team_a_score: ''
  };

  componentDidMount = () => {
    this.setState({
      current_matches: this.props.allCurrentWeekData.league.current_matches
    });
  };

  handleHomeChange = (e) => {
    
    let score = e.target.value
    let id = e.target.id
    this.setState({match_id: id, team_h_score: score})
  }

  handleAwayChange = (e) =>  {
    let score = e.target.value
    this.setState({team_a_score: score})
}

  handleSubmit = (e) => {
      e.preventDefault();
      let submitScoreObj = {
          match_id: this.state.match_id,
          team_h_score: this.state.team_h_score,
          team_a_score: this.state.team_a_score
      }
      console.log(submitScoreObj)
      API.submitScore(submitScoreObj)

  }

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
          
            {this.props.allCurrentWeekData.league.current_matches.map(
              fixture => (
                <>
                <Form size="small" key="small" onSubmit={this.handleSubmit}>
                  <Form.Group>
                    <Form.Field label={fixture.team_h.short_name} id={fixture.id} control="input" placeholder={fixture.team_h_score} onChange={this.handleHomeChange}/>
                    <Form.Field label={fixture.team_a.short_name} id={fixture.id} control="input" placeholder={fixture.team_a_score} onChange={this.handleAwayChange}/>
                    <Button type="submit" value="submit">Submit</Button>
                  </Form.Group>
                  <Divider hidden />
                </Form>
                </>
              )
            )}
            
            
        </Grid.Column>
        <Grid.Column>
        <Button type="submit">Update game to next round</Button>
        </Grid.Column>
      </Grid>
    );
  }
}

export default UpdateRound;
