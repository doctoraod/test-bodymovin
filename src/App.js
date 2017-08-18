import React, { Component } from 'react';
import bodymovin from 'bodymovin';

class App extends Component {
  componentDidMount() {
    bodymovin.loadAnimation({
      container: document.getElementById('bm'), // the dom element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: './data.json' // the path to the animation json
    });
  }
  render() {
    return (
      <div className="App">
        <div id="bm" style={{width:'100%',height:'100%'}}></div>
      </div>
    );
  }
}

export default App;
