import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './welcome/Hello';
import './style.css';
import ToggleTest from './Components/ToggleTest';
import Persons from './persons.js'

var x = "123"

/*
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

  return  <div>
          <h1>This is a Brand {this.props.brand === "BMW" ? "true" : "false"}
          
          </h1>
          <h2>{this.props.number}</h2>
         </div>
      
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

class AppProps extends React.Component{
  constructor(props){
    super(props)
    this.props = {
      "name" : "Volvo",
      "model":"Z series"
    }
    this.state = {
      "name": this.props.name,
      "model":  this.props.model
    }
  }
  render(){
    return (
      <div>
          <h1> {this.props.headerProp}</h1>
          <h3>{this.props.contentProp}</h3>
          <h3>{this.state.name}</h3>
          <h3>{this.state.model}</h3>
          <Car number={this.props.number}/>
      </div>

    )
  }
}

AppProps.defaultProps = {
  headerProp: "This is prop for header",
  contentProp : "this is prop from content",
  number : "KA 02"
}

Car.defaultProps = {
  number: "KA 03"
}
*/


class App extends Component{
  constructor(){
    super();
    this.state = {
      persons: [
        {name : 'Sujan' , city : 'Bengaluru'},
        {name: 'Raj' , city : 'Delhi'}
      ],
      display : true
    }
  }

  toggler = () =>{
    this.setState ({display : !this.state.display})
  }

  pClick = (index) =>{
    const x = {...this.state.persons} // spread operator , which will get all params
    x.splice(index,1)
    this.setState({persons:x})
  }

  renderPerson = () =>{
    let person;
    if(this.state.display  === true) { // ==== checks value and data type comparison
      return person =(
        <div>
          {this.state.persons.map((p,index) => {
              return <Persons 
                        click={() => this.pClick(index)}
                        name= {p.name}
                        city ={p.city}
                        i = {index}
                      />
          }

          )}

        {/*  {this.state.display ? <Persons/> : <Vehicles /> */}

        </div>
      )
    }
  }

  render(){
    return(
      <div style={{ backgroundColor: "lightblue"}}>
        <Hello name = {this.state.name} />
        <p> Example for Conditional rendering</p>
        <button onClick= {this.toggler}>Change Button</button>
     {this.renderPerson()}
      </div>
    )
  }
}

render(<ToggleTest />, document.getElementById('root'));
