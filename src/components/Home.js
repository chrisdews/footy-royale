import React from "react";
import { Button, Form, Grid, Header, Modal, Icon } from "semantic-ui-react";
import { BrowserRouter } from "react-router-dom";

import { Redirect } from "react-router";

import API from "../adapters/API";

class Home extends React.Component {
  state = {
    username: "",
    password: "1234",
    checkpassword: "1234",
    redirect: false
  };

  handleSubmitLogin = e => {
    e.preventDefault();
    const newuserObj = {
      username: this.state.username,
      password: this.state.password,
    };

    API.userLogin(newuserObj)
      .then(user => this.props.setLoggedInUser(user))
      .then(this.setState({ redirect: true }));
  };

  handleSubmitSignup = e => {
    e.preventDefault();
    const newuserObj = {
      username: this.state.username,
      password: this.state.password,
      win_count: 0
    };

    API.userSignUp(newuserObj)
      .then(user => this.props.setLoggedInUser(user))
      .then(this.setState({ redirect: true }));
  };

  handleChange = e => {
    this.setState({ username: e.target.value });
  };

  render() {
    const redirect = this.state.redirect;
    if (redirect) {
      return <Redirect to="/game" />;
    }

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

            <Form size="mini" onSubmit={this.handleSubmitLogin}>
              <Form.Field>
                <input
                  type="text"
                  value={this.state.value}
                  onChange={this.handleChange}
                  placeholder="username"
                />
              </Form.Field>
              <Form.Field>
                <input type="password" placeholder="password" />
              </Form.Field>

              <Button
                animated="fade"
                color="yellow"
                type="submit"
                value="Submit"
              >
                <Button.Content visible> LOG IN NOW </Button.Content>
                <Button.Content hidden> IF YOU WANT TO </Button.Content>
              </Button>
            </Form>

            <Modal trigger={<Button>SIGN UP</Button>} basic size="small">
              <Header content="SIGN UP TO FOOTY ROYALE" />
              <Modal.Content>
              <Form size="mini" onSubmit={this.handleSubmitSignup}>
              <Form.Field>
                <input
                  type="text"
                  value={this.state.value}
                  onChange={this.handleChange}
                  placeholder="username"
                />
              </Form.Field>
              <Form.Field>
                <input type="password" label="password" placeholder="password" />
              </Form.Field>
              <Form.Field>
                <input type="password" label="confirm password" placeholder="confirm password" />
              </Form.Field>

              <Button
                animated="fade"
                color="yellow"
                type="submit"
                value="Submit"
                disabled={!this.state.username || !this.state.password || !this.state.checkpassword || this.state.password != this.state.checkpassword}
              >
                <Button.Content visible> SIGN UP NOW </Button.Content>
                <Button.Content hidden> IF YOU WANT TO </Button.Content>
              </Button>
            </Form>
              </Modal.Content>
              
            </Modal>
          </Grid.Column>
          <Grid.Column />
        </Grid>
      </>
    );
  }
}

export default Home;
