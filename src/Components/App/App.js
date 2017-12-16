import React, { Component } from 'react';
// import logo from './logo.svg';
import { Grid } from 'semantic-ui-react'

import SegmentComponent from '../Segment/Segment';
import FormComponent from '../Form/Form';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Grid container columns={1}>
          <Grid.Column>
            <SegmentComponent>
              <FormComponent />
            </SegmentComponent>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default App;
