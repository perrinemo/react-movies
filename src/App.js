import React, { Component } from 'react';
import './App.css';

import FormMovies from './FormMovies';

class App extends Component {
  render() {
    return (
      <div className="center-align">
          <FormMovies />
      </div>
    );
  }
}

export default App;
