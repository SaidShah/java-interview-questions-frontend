import React, { Component } from 'react';
import Form from './components/Form'
import './App.css';

class App extends Component {

  state={
    quiz:[]
  }

  handleSubmit=(value)=>{
    console.log(value)
  }



  render() {
    return (
      <>
      <div className="App">
      <div className="title" >
        <span className="title-text">
          Java Technical Interview
        </span>
      </div>
      </div>
      <Form handleSubmit={this.handleSubmit}/>
      </>
    );
  }
}

export default App;
