import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Modal,
  Image,
  Segment
} from "semantic-ui-react";

import { Redirect } from "react-router";

import API from "../adapters/API";

class Home extends React.Component {
  state = {
    username: "",
    password: "1234",
    checkpassword: "1234",
    redirect: false,
    delayLogin: false
  };

  handleSubmitLogin = e => {
    e.preventDefault();
    const newuserObj = {
      username: this.state.username,
      password: this.state.password
    };

    API.userLogin(newuserObj)
      .then(user => this.props.setLoggedInUser(user))
      .then(() => this.setState({ delayLogin: true }))
      .then(this.delayRedirect)
      .catch(e => {
        this.setState({ errors: e });
      });
  };

  delayRedirect = () => {
    setTimeout(() => {
      this.setState({ redirect: true });
    }, 1300);
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
      .then(() => this.setState({ delayLogin: true }))
      .then(this.delayRedirect)
      .catch(e => {
        this.setState({ errors: e });
      });
  };

  handleChange = e => {
    this.setState({ username: e.target.value });
  };

  render() {
    const redirect = this.state.redirect;
    if (redirect) {
      return <Redirect to="/game" />;
    }

    const delayLogin = this.state.delayLogin;

    return (
      <>
        <Grid
          style={{ height: "100vh" }}
          textAlign="center"
          verticalAlign="middle"
          stackable
          columns={3}
        >
          <Grid.Column>
            <Header as="h1" textAlign="center" className="slide-in-left">
              FOOTY
            </Header>

            <Grid
              id="football-animation-container"
              columns={3}
              textAlign="center"
              verticalAlign="middle"
              stackable
              columns={3}
            >
              <Grid.Row>
                <Image
                  src={require("../images/football.png")}
                  id="football-1"
                />
                <Image
                  src={require("../images/football.png")}
                  id="football-2"
                />
                <Image
                  src={require("../images/football.png")}
                  id="football-3"
                  className={delayLogin ? "roll-out-right" : null}
                />

                <Image
                  src={require("../images/crown.png")}
                  id="crown"
                  className={delayLogin ? "fade-out" : null}
                />
                <Image
                  src={require("../images/football.png")}
                  id="football-4"
                />
                <Image
                  src={require("../images/football.png")}
                  id="football-5"
                />
              </Grid.Row>
            </Grid>

            <Header as="h1" textAlign="center" className="slide-in-right">
              ROYALE{" "}
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
                loading={delayLogin}
              >
                <Button.Content visible> LOG IN NOW </Button.Content>
                <Button.Content hidden> IF YOU WANT TO </Button.Content>
              </Button>
            </Form>

            <Modal
              trigger={
                <Button id="sign-up-button" animated="fade" color="yellow">
                  <Button.Content visible> SIGN UP </Button.Content>
                  <Button.Content hidden> DO IT </Button.Content>
                </Button>
              }
              basic
              size="small"
              closeIcon
            >
              <Modal.Content>
                <Grid
                  textAlign="center"
                  verticalAlign="middle"
                  stackable
                  columns={3}
                >
                  <Grid.Column className="sign-up-container">
                    <Header
                      as="h1"
                      textAlign="center"
                      className="slide-in-right"
                    >
                      FOOTY
                    </Header>
                    <Grid
                      id="football-animation-container"
                      columns={3}
                      textAlign="center"
                      verticalAlign="middle"
                      stackable
                      columns={3}
                    >
                      <Grid.Row>
                        <Image
                          src={require("../images/football.png")}
                          id="football-sign-up-1"
                        />
                        <Image
                          src={require("../images/football.png")}
                          id="football-sign-up-2"
                        />
                        <Image
                          src={require("../images/football.png")}
                          id="football-sign-up-3"
                          className={delayLogin ? "bounce-out-top" : null}
                        />

                        <Image
                          src={require("../images/crown.png")}
                          id="crown"
                          className={delayLogin ? "fade-out" : null}
                        />
                        <Image
                          src={require("../images/football.png")}
                          id="football-sign-up-4"
                        />
                        <Image
                          src={require("../images/football.png")}
                          id="football-sign-up-5"
                        />
                      </Grid.Row>
                    </Grid>
                    <Header
                      as="h1"
                      textAlign="center"
                      className="slide-in-left royale-title-home"
                    >
                      ROYALE
                    </Header>

                    <Form size="mini" onSubmit={this.handleSubmitSignup}>
                      <Form.Field>
                        <input
                          type="text"
                          value={this.state.value}
                          onChange={this.handleChange}
                          placeholder={this.state.username}
                        />
                      </Form.Field>
                      <Form.Field>
                        <input
                          type="password"
                          label="password"
                          placeholder="password"
                        />
                      </Form.Field>
                      <Form.Field>
                        <input
                          type="password"
                          label="confirm password"
                          placeholder="confirm password"
                        />
                      </Form.Field>

                      <Button
                        animated="fade"
                        color="yellow"
                        type="submit"
                        value="Submit"
                        disabled={
                          !this.state.username ||
                          !this.state.password ||
                          !this.state.checkpassword ||
                          this.state.password != this.state.checkpassword
                        }
                        loading={delayLogin}
                      >
                        <Button.Content visible> SIGN UP NOW </Button.Content>
                        <Button.Content hidden> IF YOU WANT TO </Button.Content>
                      </Button>
                      {this.state.errors && (
                        <Segment inverted>{this.state.errors}</Segment>
                      )}
                    </Form>
                  </Grid.Column>
                </Grid>
              </Modal.Content>
            </Modal>
            {this.state.errors && <div>{this.state.errors}</div>}
          </Grid.Column>
        </Grid>
      </>
    );
  }
}

export default Home;
