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
              <div className="team-badge-container">
                <img className="team-badge-image"
                  src={require(`../images/badges/${
                    this.props.selectedTeam.db_id
                  }.jpg`)}
                  alt="selected logo"
                />
              </div>

              <h3>{this.props.selectedTeam.short_name}</h3>
              <br />
              <div>
                <Button
                  
                  color="yellow"
                  onClick={() => {
                    this.clickHandler();
                  }}
                >
                  SAVE
                </Button>
              </div>
            </div>
          </Grid.Row>
        </Grid>
      </>
    );
  }
}

export default SelectedTeamCard;
