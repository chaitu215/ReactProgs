import React, { Component } from 'react';
import { render } from 'react-dom';

const CarComponent = (props) => {
    return(<div>
        <h1>{props.type} : {props.name}</h1>
    </div>)
}
export default CarComponent;