import React, { Component } from 'react';
import { render } from 'react-dom';

//Structure of component

// global variables -- start
var globalname = "global variable"
// global variables -- end

//Note:  Always start component names with a capital letter
//React treats components starting with lowercase letters as DOM tags

// class component -- start
class Test extends Component {
  //Constructor -- start
    constructor(props) {
        super(props)

        //props are passed to a component. props are unchangeable or Immutable
        //initializing props -- start
        this.props = {propName : "testProp", propId : 1}
        //initializing props -- end

        //State is internal to a component and this.state is always assigned inside a constructor
        //initializing state -- start
        this.state = {stateName : this.props.propName, stateId : this.props.propId }
        //initializing state -- end

        //initializing variables -- start
        this.name = "local variable"
        this.id = 1
        //initializing variables -- end

    }
    // Constructor -- end

    changeState = () => {
        //do not modify state directly
        //Wrong -- this.state.stateName = "testStateChanged"
         this.setState({ stateName : "testStateChanged", stateId : 2})
    };
    
    //render method
    render() {
   // return describes what should appear on  screen
   return(<div>
           <h1>test component : {globalname}</h1>
           <h2>State: {this.state.stateName} : {this.state.stateId}</h2>
           <h3>list itmes</h3>
           <li>{this.id} : {this.name}</li>
           <li>2 : {this.props.name}</li>
           <br/>
           <button onClick={this.changeState}>click here to change state</button>
           </div>)
    }
}

// class component -- ends

//function component -- as this component is literally a java script functions
function Test1(props) {
return(<div><label>{props.name}</label>
<h1>hello</h1></div>)
}

//function compoent -- end

export default Test1;