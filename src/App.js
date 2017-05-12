import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {value: 'Type some text here!', reverseOn: false};
  }

  handleChange(e) {
    if(this.state.reverseOn) {
      var txt = e.target.value;
      txt = txt.split("").reverse().join("");
      this.setState({value: txt});
    } else {
      this.setState({value: e.target.value});
    }
  }
  
  handleClick() {
    this.setState(prevState => ({
      reverseOn: !prevState.reverseOn
    }));
    var txt = this.state.value;
    txt = txt.split("").reverse().join("");
    this.setState({value: txt});
  }
  
  render() {
    return (
      <div className="App">
        <h3>Input</h3>
        <textarea
          onChange={this.handleChange}
          defaultValue={this.state.value} />
        <h3>Output</h3>
        <div
          className="content"
          dangerouslySetInnerHTML={{__html: this.state.value}}
        />
        <button onClick={this.handleClick}>
          Reverse!
        </button>
      </div>
    );
  }
}

export default App;
