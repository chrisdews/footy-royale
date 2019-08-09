import React from "react";
import { Grid } from "semantic-ui-react";

class SelectedTeamCard extends React.Component {
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
              <img src={ require(`../images/logos/${ this.props.selectedTeam.club_code}.png`) } alt="selected logo"/>
              </div>

              <div>
              {this.props.selectedTeam.name}
              </div>
            </div>
          </Grid.Row>
        </Grid>
      </>
    );
  }
}

export default SelectedTeamCard;
