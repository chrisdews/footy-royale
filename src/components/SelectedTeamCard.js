import React from "react";
import { Grid, Button } from "semantic-ui-react";

class SelectedTeamCard extends React.Component {
  clickHandler = () => {
    this.props.postPrediction();
  };

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
              <div>
              {this.props.selectedTeam.team_id ? <img
                  src={require(`../images/logos/${
                    this.props.selectedTeam.team_id
                  }.png`)}
                  alt="selected logo"
                /> : 'select a team'}
              </div>

              <div>{this.props.selectedTeam.name}</div>
              <br />
              <div>
                <Button
                  onClick={() => {
                    this.clickHandler();
                  }}
                >
                  SAVE
                </Button>
              </div>

              <div>
                {" "}
                {this.props.currentPrediction && this.props.currentPrediction.prediction.team_id === this.props.selectedTeam.id
                  ? `Your choice of ${this.props.selectedTeam.name} was saved for this week.`
                  : "click save to confirm"}
              </div>
            </div>
          </Grid.Row>
        </Grid>
      </>
    );
  }
}

export default SelectedTeamCard;
