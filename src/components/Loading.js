import React, { Component } from "react";
import { Grid, Loader } from "semantic-ui-react";

class Loading extends Component {

    
  render() {
    return (

        <Grid
          columns={1}
          textAlign="center"
          
        >
        <Grid.Row className="game-loading">
        <Loader active inline='centered' > Loading </Loader>
        </Grid.Row>

        </Grid>
      
    );
  }
}

export default Loading;
