import React from "react";
import { Grid, Button } from "semantic-ui-react";

class PreviousPredictionsCard extends React.Component {
  render() {
    const team_id = this.props.prediction.team_id;
    console.log(team_id);

    return (
      <>
        <Grid
          style={{ minHeight: "2vh" }}
          textAlign="center"
          verticalAlign="middle"
        >
          <Grid.Row>
            <div>
              Round {this.props.prediction.royale_round}:{" "}
              {this.props.allTeams
                .filter(team => team.id === team_id)
                .map(team => team.name + team.id)}
            </div>
          </Grid.Row>
        </Grid>
      </>
    );
  }
}

export default PreviousPredictionsCard;
