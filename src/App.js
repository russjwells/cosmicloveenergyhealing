import React, { Component } from 'react';
import starbg from './bluegreenstarfield.png';
import cosmiclove from './cosmiclove.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={cosmiclove} className="App-logo" alt="logo" />
          <h2>Cosmic Love Energy Healing</h2>
        </div>
        <p className="App-intro">
          Hello. I am Russell Wells and I am here to help. 
        </p>
        <p className="body-copy">
          I am a self-taught energy worker and intuitive healer.
        </p>
        <p className="body-copy">
        I am also initiated into the healing art of Reiki in the Usui lineage.
        </p>
        <p className="body-copy">
          I am passionate about helping others stand in their fullest expression.
        </p>
        <p className="body-copy">
           I am offering 30, 60, 90, and 120 minute energy work sessions.
        </p>
        <p className="body-copy">
          Lay on the table and relax as your energetic system is supported and restored.
        </p>
        <p className="body-copy">
          I am based in Ocean Beach, San Diego, California. 
        </p>
        <p className="body-copy">
        I have spaces open for a few weekly clients.
        </p>
        <p className="body-copy">
          New to energy work? 
        </p>
        <p className="body-copy">
         Let's connect and discover how I can be of service to your growth.
        </p>
        <p className="body-copy">
          I am on <a href="http://www.facebook.com/cosmicloveenergyhealing" className="bodylink">facebook</a> and <a href="http://www.instagram.com/cosmicloveenergyhealing" className="bodylink">instagram</a>.
        </p>
        
        <p className="body-copy">
          My telephone is 760-936-1704.
        </p>
        <p className="body-copy">
          I am here to serve the light inside of you.
        </p>
        <div className="App-footer">
          <h2><a href="http://www.calendly.com/cosmicloveenergyhealing" className="headerlink">click here to book me</a></h2>
        </div>
      </div>
    );
  }
}

export default App;
