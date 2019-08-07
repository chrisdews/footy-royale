import React from 'react';
import logo from './logo.svg';
import API from './adapters/API.js'
import './App.css';

class App extends React.Component {

  state = {
    fixtures: [],
    test: 'hi'
  }

  componentDidMount = () => {
    console.log('app mounted')
    this.fetchFixtures()
  }

  fetchFixtures = () => {
    return API.fetchFixtures().then(fixtures => this.setState({fixtures}))
  }

  render() { 
    return(

    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </>
    )
  }
}

export default App;
