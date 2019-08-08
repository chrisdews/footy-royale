import React from "react";
import { Button, Grid, Header } from "semantic-ui-react";
import FixtureCard from './FixtureCard'

class Game extends React.Component {

  // state = {
  //   allCurrentWeekData: []
  // }
  // componentDidUpdate (prevProps, prevState) {
  //   if (prevProps.allCurrentWeekData !== this.props.allCurrentWeekData)
  //   this.setState({
  //     allCurrentWeekData: this.props.allCurrentWeekData
  //   })
  // }

  render() {

    const allCurrentWeekData = this.props.allCurrentWeekData
    return (
     <>
      <Grid
        columns={3}
        style={{ height: "10vh" }}
        textAlign="center"
        verticalAlign="middle"
      >
        <Grid.Column />
        <Grid.Column>
          <Header as="h1" textAlign="center">
            FOOTY ROYALE
          </Header>
          <Header as="h5" textAlign="center" className="footy-subtitle">
            {allCurrentWeekData.league.name}
          </Header>

          
          
        </Grid.Column>
        
        <Grid.Column />
      </Grid>

      <Grid
        columns={3}
        style={{ height: "90vh" }}
        textAlign="center"
        verticalAlign="middle"
      >
        <Grid.Column>
          <Header as="h1" textAlign="center">
            Upcoming Fixtures
          </Header>
          {allCurrentWeekData.league.current_matches.map(fixture => <FixtureCard key={fixture.id} fixture={fixture} />)}
          

          
          
        </Grid.Column>
        <Grid.Column />
        <Grid.Column />
      </Grid>
     </>
    );
  }
}

export default Game;
