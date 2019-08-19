import React from "react";
import { Grid, Button } from "semantic-ui-react";
import PreviousPredictionsCard from "./PreviousPredictionsCard";

class PreviousPredictionsContainer extends React.Component {
  render() {
    return (
      <>
        <Grid
          style={{ minHeight: "2vh" }}
          textAlign="center"
          verticalAlign="middle"
        >
          <Grid.Row>
            <Grid
              stackable
              columns={3}
              textAlign="center"
              verticalAlign="middle"
            >
              {this.props.previousUserPredictions.map(pred => (
                <Grid.Column>
                  <PreviousPredictionsCard
                    prediction={pred}
                    predTeamID={pred.team_id}
                    allTeams={this.props.allCurrentWeekData.league.all_teams}
                  />
                </Grid.Column>
              ))}
            </Grid>
          </Grid.Row>
        </Grid>
      </>
    );
  }
}

export default PreviousPredictionsContainer;
