import React from 'react';
import Contact from '../contact'

export default ({ apple }) => <div>
    <h1>{apple = "Krishna"}</h1>
    <Contact/>
</div>

function apple(){
    var apple = "Krishna"
    return(
        <div>
               {apple} 
               <Contact/>
        </div>
    )
}