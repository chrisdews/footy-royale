import React from "react";
import { Grid, Button } from "semantic-ui-react";

class PreviousPredictionsCard extends React.Component {
  

  render() {

    const team_id = this.props.prediction.team_id

    return (
      <>
        <Grid
          style={{ minHeight: "2vh" }}
          textAlign="center"
          verticalAlign="middle"
        >
          <Grid.Row>
            <div>
            {this.props.prediction.team_id}
            </div>
          </Grid.Row>
        </Grid>
      </>
    );
  }
}

export default PreviousPredictionsCard;
