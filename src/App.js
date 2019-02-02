import React, { Component } from 'react';
import Form from './components/Form'
import EachQuestion from './components/EachQuestion'
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
    },()=>this.showQuestions())
  }

  showQuestions=()=>{
    if(this.state.quiz.length > 0){
      let quiz = this.state.quiz.map((eachItem, index)=>{
        return <EachQuestion eachQuestion={eachItem} key={eachItem.id} number={index}/>
      })
      return quiz
    }else{
      return <h2>Please select a number of questions</h2>
    }
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
      <hr className="divider"/>
      <div className="App">
      {this.state && this.state.quiz ? this.showQuestions() : null}
      </div>
      </>
    );
  }
}

export default App;
