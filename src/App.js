import React, { Component } from 'react';
import './App.css';
import { IdeaApp } from './IdeaApp.js';


class App extends Component {

render() {
    return (
      <div>
        <figure className="logo"><img src="img-content/download.png" alt="logo braineet" /></figure>
        <h1>Bienvenue dans la plateforme de partage d'idées de braineet. </h1>
        <IdeaApp />
      </div>
      
      
      );
  }
}

export default App;
