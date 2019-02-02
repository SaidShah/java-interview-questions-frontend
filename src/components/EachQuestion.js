import React, { Component } from 'react';

class EachQuestion extends Component {
  state={
    showAnswer: false
  }

  showAnswer=()=>{
    this.setState({
      showAnswer: !this.state.showAnswer
    })
  }

  displayAnswer=()=>{
    return <h3 className="showAnswer">{this.props.eachQuestion.answer}</h3>
  }

  render() {
    console.log(this.state.showAnswer)
    return (
      <div className="margins">
        <div className="eachCard">
          <h3>{this.props.number+1}. {this.props.eachQuestion.question} </h3>
          <button className="btn-md blue margins" onClick={this.showAnswer}>View Answer</button>
          {this.state.showAnswer ? this.displayAnswer() : ''}
        </div>
      </div>
    );
  }

}

export default EachQuestion;
