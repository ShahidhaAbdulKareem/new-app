import React, { Component } from 'react';
import './Counter2.css';

class Counter2 extends Component {
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
        <div className="center1">
            <button type="button" className="success1" id="plus" onClick={this.increment.bind(this)}>+</button>
            <input className='numb-count1' value={this.state.counter}/>
            <button type="button" className="danger1" id="minus" onClick={this.decrement.bind(this)}>-</button> 
        </div>
      </div>
    );
  }
}

export default Counter2;