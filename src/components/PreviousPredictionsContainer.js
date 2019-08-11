import React from "react";
import { Grid, Button } from "semantic-ui-react";
import PreviousPredictionsCard from "./PreviousPredictionsCard"

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
            <div>
            {this.props.previousUserPredictions.map(pred => <PreviousPredictionsCard prediction={pred} allTeams={this.props.allCurrentWeekData.league.all_teams}/>)}
            </div>
          </Grid.Row>
        </Grid>
      </>
    );
  }
}

export default PreviousPredictionsContainer;
