import React from "react";
import { Button, Grid, Header } from "semantic-ui-react";

class Game extends React.Component {
  render() {
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
            ONLY THE STRONG SURVIVE
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
          

          
          
        </Grid.Column>
        <Grid.Column />
        <Grid.Column />
      </Grid>
     </>
    );
  }
}

export default Game;
