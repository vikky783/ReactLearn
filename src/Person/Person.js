import React from 'react';
const Person = (props)=>{
return( 
    <div>
    <p>This is Really Cool  {Math.floor(Math.random()*100)} My name is {props.name} and age is {props.age} </p>
    <p>
        {props.children}
    </p>
    </div>
)
};

export default Person;