import React, { Component } from 'react';
import './Negative.css';

class Negative extends Component {

  constructor(props){
    super(props);
     this.state = {
        counter:0
     };
   }

  increment(){
    this.setState({
      counter: this.state.counter + 1
    });
  }

  decrement(){
      if(this.state.counter == 0){
        this.setState({
            counter:0
        });
      }else {
        this.setState({
            counter: this.state.counter - 1
        });
      }
  }


  render() {
    return (
      <div>
        <div id="center">
            <label for="name">Date</label>
            <p></p>
            <button type="button" className="btn btn-success" id="plus" onClick={this.increment.bind(this)}>+</button>
            <input type="text" id="date" value={this.state.counter}/>
            <button type="button" className="btn btn-danger" id="minus" onClick={this.decrement.bind(this)}>-</button> 
        </div>
      </div>
    );
  }
}

export default Negative;