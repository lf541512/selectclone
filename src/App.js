import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Select from './Select.js'
import Option from './Option.js'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Select>
              <Option key={1} value={1} className='red'><div>sdfa231</div>sadf</Option>
              <Option key={2} value={2}>2343576</Option>
          </Select>
      </div>
    );
  }
}

export default App;
