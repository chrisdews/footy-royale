import React from "react";
import { Button, Form, Grid, Header } from "semantic-ui-react";

class Home extends React.Component {
  render() {
    return (
      <>
        <Grid
          columns={3}
          style={{ height: "100vh" }}
          textAlign="center"
          verticalAlign="middle"
        >
          <Grid.Column />
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h1" textAlign="center">
              FOOTY ROYALE
            </Header>
            <Header as="h5" textAlign="center" className="footy-subtitle">
              ONLY THE STRONG SURVIVE
            </Header>

            <Form size="mini">
              <Form.Field>
                <input placeholder="username" />
              </Form.Field>
              <Form.Field>
                <input placeholder="password" />
              </Form.Field>
              
              
              <Button animated="fade" color='yellow' href='/game' type="submit">
                <Button.Content visible> SIGN UP NOW </Button.Content>
                <Button.Content hidden> IF YOU WANT TO </Button.Content>
              </Button>
               
            </Form>
          </Grid.Column>
          <Grid.Column />
        </Grid>
      </>
    );
  }
}

export default Home;
