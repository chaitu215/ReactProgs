import React, { Component } from 'react';
import { render } from 'react-dom';
import CarComponent from './CarComponent.js';
import BikeComponent from './BikeComponent.js';

class ToggleTest extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            vehicle : [{type : "Car", name : "BMW"},
                       {type : "Bike", name : "Hero"},
                       {type : "Car", name : "Benz"},
                       {type : "Bike", name : "Ducati"} ],
            display : true}
    }

    toggle = () => {
        this.setState({display : !this.state.display})
    }

    display = () => {
    let vehicle;
       if (this.state.display) {return vehicle =(<div> {this.state.vehicle.map((v,index) => {
       if(v.type && v.type === "Car")
       return <CarComponent type = {v.type} name = {v.name}/>
       }
       )}</div>)} else {{return vehicle =(<div> {this.state.vehicle.map((v,index) => {
        if(v.type && v.type === "Bike")   
        return <BikeComponent type = {v.type} name = {v.name}/>
        }
        )}</div>)}
    }
}
    render() {
        return(<div>
            <h1>Toggle Test</h1>
            <button onClick = {this.toggle}>Click To Toggle</button>
            {this.display()}
        </div>)
    }
}

export default ToggleTest;