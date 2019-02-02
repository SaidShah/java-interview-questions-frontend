import React, { Component } from 'react';
import Form from './components/Form'
import './App.css';

class App extends Component {

  state={
    quiz:[]
  }

  handleSubmit=(value)=>{
    fetch(`http://localhost:3002/questions?totalQuestons=${value}`)
    .then(res => res.json())
    .then(questions =>{
      this.setState({
        quiz: questions
      })
    })
  }



  render() {
    console.log(this.state);
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
