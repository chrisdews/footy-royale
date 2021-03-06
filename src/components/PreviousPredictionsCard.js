import React from "react";
import { Grid } from "semantic-ui-react";

class PreviousPredictionsCard extends React.Component {
  render() {
    const team_id = this.props.prediction.team_id;

    return (
      <>
        <Grid
          style={{ minHeight: "2vh" }}
          textAlign="center"
          verticalAlign="middle"
        >
          <Grid.Row>
            {this.props.predTeamImgID ? (
              <div>
                <h5>Round {this.props.prediction.royale_round} </h5>

                <img
                  src={require(`../images/logos/${this.props.predTeamImgID}.png`)}
                  alt="previous selected team logo"
                />
              </div>
            ) : (
              "Your selection was saved"
            )}
          </Grid.Row>
        </Grid>
      </>
    );
  }
}

export default PreviousPredictionsCard;
