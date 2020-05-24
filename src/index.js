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

// Props example
class Car extends React.Component{
  constructor(){
    super()
    //this.props.brand = "Maruthi"
    this.brand = "BMW"
    
  }
  render(){
  return  <h1>This is a Brand {this.props.brand === "BMW" ? "true" : "false"}</h1>
  }
}
class Garage extends React.Component{

  render(){
    return(
      <div>
        <h1>Where is the Garage </h1>
        <Car brand="TATA"/>
        <Car brand="BMW"/>
        <Car/>
      </div>
    )
  }
}


// state example 
class CarState extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      brand : "Ford",
      model : "Mustand",
      color: "Brown",
      year: "1999"
    }
    this.props = {
      name: "Krishna"
    } 
  }

  changeColor = () => {
    this.setState({color: "blue"})
    //this.state.color ="blue"
  }

  render(props){
    return(
      <div>
        <label>{this.props.name}</label>

        <h1 style={{ font: "12px", backgroundColor: "red"}}> my {this.state.brand}</h1>
        <p style = {{ backgroundColor: "lightBlue" ,fontFamily:"Arial" }} > 
            {this.state.color}
            {this.state.model}
            {this.state.year}
        </p>
        <button type="button" onClick = {this.changeColor}>Change Color</button>
      </div>
    )
  }
}


// function Welcome(props) {
//   return <h1> {props.name}</h1>
//   }

//   function App3(){
//     return(
//       <div>
//         <Welcome name="sara"/>
//       </div>
//     )
//   }

render(<Test name = "hello prop" />, document.getElementById('root'));
