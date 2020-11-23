import React from 'react';
import './App.css';
import Schedule from './components/schedule/Schedule';

class App extends React.Component {
  render() {
    return(
      <div className="App">
        <p>Scheduler</p>
        <Schedule />
      </div>
    );
  }
}

export default App;
