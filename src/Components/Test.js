import React, { Component } from 'react';
import { render } from 'react-dom';

//Structure of component

// global variables -- start
var globalname = "global variable"
// global variables -- end

class test extends Component {
  //Constructor -- start
    constructor(props) {
        super(props)

        //initializing props -- start
        this.props = {propName : "testProp", propId : 1}
        //initializing props -- end

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
    return(<div>
           <h1>test component : {globalname}</h1>
           <h2>State: {this.state.stateName} : {this.state.stateId}</h2>
           <h3>list itmes</h3>
           <li>{this.id} : {this.name}</li>
           <br/>
           <button onClick={this.changeState}>click here to change state</button>
           </div>)
    }
}

export default test;