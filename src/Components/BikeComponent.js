import React, { Component } from 'react';
import { render } from 'react-dom';

const BikeComponent = (props) => {
    return(<div>
        <h1>{props.type} : {props.name}</h1>
    </div>)
}
export default BikeComponent;

//const elem = <Test1 name = "test props from elements"/>