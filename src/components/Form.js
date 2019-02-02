import React, { Component } from 'react';

class Form extends Component {

  state={
    input: ''
  }

  handleChange=(e)=>{
    this.setState({
      input:e.target.value
    })
  }

  handleSubmit=(e,value)=>{
    e.preventDefault()
    this.props.handleSubmit(value)
    this.setState({
      input: ''
    })
  }

  render() {
    return (
      <div className="form App">
      <form onSubmit={(e)=>this.handleSubmit(e,this.state.input)}>
        <label htmlFor="input" className="label">How many questions would you like?</label>
        <input name="input" type="number" value={this.state.input} placeholder="Enter a number 1-77 " onChange={this.handleChange}  min="1"></input>
        <input type="submit" className="btn-md blue"></input>
      </form>
      </div>
    );
  }

}

export default Form;
