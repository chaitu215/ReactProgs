import React, { Component } from 'react';
import { render } from 'react-dom';

class Test3 extends Component {
    constructor(props) {
    super(props)
    //initializing state -- start
    this.state = {book : "React", price : "$ 2.00", author : "John"}
    //intializing state -- end
    }
    
    //The componentDidMount() method runs after the component output has been rendered to the DOM
      async componentDidMount() {
      await sleep(5000)
      this.setState((state) => ({book : "Angular", price : "$1.00", author  : "John Grisham"}))
    }

    componentWillUnmount() {

    }

    // render will be invoked when ever state is changed 
    render() {
        return(<div>
            <h1>Books details</h1>
            <li>{this.state.book} : {this.state.price} : {this.state.author} </li>
        </div>)
    }
}

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

export default Test3;