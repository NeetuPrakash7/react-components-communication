import React, { Component } from 'react';
import Parent from './ParentToChild/parent.js';

import './App.css';

class App extends Component {
  state = {
    title: 'placeholder title'
  }
  
  changeTheWorld = (newTitle) => {
    this.setState({ 
      title:newTitle
    });
  }
    keepTheWorldSame = (newTitle) => { 
    
      this.setState({
        title:newTitle
      });
    }
  

  render() {
    return (
      <div className="App">
        <Parent changeTheWorldEvent={this.changeTheWorld.bind(this, 'new world')} 
         keepTheWorldSameEvent={this.keepTheWorldSame.bind(this, 'same world')}
         title={this.state.title} />
      </div>
    );
  }
}

export default App;
