import React, { Component } from 'react';
import './Counter1.css';

class Counter1 extends Component {
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
        <div className="center">
            <button type="button" className="success" id="plus" onClick={this.increment.bind(this)}>+</button>
            <input className='numb-count' value={this.state.counter}/>
            <button type="button" className="danger" id="minus" onClick={this.decrement.bind(this)}>-</button> 
        </div>
      </div>
    );
  }
}

export default Counter1;