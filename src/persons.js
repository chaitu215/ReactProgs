import React from 'react';

const Persons = (props) =>{
    return (
        <div>
            <h3>{props.name} </h3>
            <p>{props.city}</p>
        </div>
    )
}

export default Persons