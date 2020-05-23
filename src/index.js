import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './welcome/Hello';
import './style.css';
import Test from './Components/Test';

var x = "123"


class App extends Component {
  
  constructor() {
    super();

    this.empid = ""

  }

  render() {
 

    return (
      <div>
        <p>
         welcome to ReactJs
        </p>
      </div>
    );
  }
}

class App2 extends React.Component{
  constructor(){
    super()
  }

  render(){
    return(
      <div>
        <p>Welcome from component 2 </p>
        <App/>
        <Hello/>
      </div>
    )
  }
}

render(<Test />, document.getElementById('root'));
