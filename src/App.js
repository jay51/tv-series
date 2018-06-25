import React, { Component } from 'react';
import './App.css';
import Series  from "./series";
import "whatwg-fetch"; 

class App extends Component {
  constructor(){
    super();
    this.state = {
      time:""
    }    
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Our Tv series</h1>
        </header>
        <p className="App-intro">
          Search any Tv movie or anima <code>Search</code>
        </p>
        {/* all components will be below here */}
        <Series/>
      </div>
    );
  }
}

export default App;
