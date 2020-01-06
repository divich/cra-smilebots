import React from 'react';
import logo from './logo.svg';
import './App.css';
import Coverflow from "reactjs-new-coverflow";


function App() {
  return (
    <div className="App">
      <Coverflow
        //   onIndexChange={index => this.setState({ index })}
        offset={0.3}
        size={250}
        //   indexDirection={this.state.indexDirection}
      >
        <div>hello</div>
        <div>hello1</div>
        <div>hello2</div>
      </Coverflow>
    </div>
  );
}

export default App;
