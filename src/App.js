import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props =>  {
  
  const [personState, setPersonState] = useState({
    
      person : [
        {name: "Vikky", age: 10},
        {name: "Rikky", age: 20},
        {name: "Nikky", age: 30},
        {name: "Mikky", age: 40}
      ]
    
    });
    const switchStateHandler = () =>{
      setPersonState({
        person : [
          {name: "New Vikky", age: 10},
          {name: "Tikky", age: 20},
          {name: "Nikky", age: 30},
          {name: "Mikky", age: 100}
        ]
      })
    } 

   {
    return (
      <div className="App">
       <h1>Hello this is my First React App</h1>
       <p>I am loving it</p>
       <button onClick={switchStateHandler}>Update me</button>
       <Person name={personState.person[0].name} age ={personState.person[0].age}/>
       <Person name={personState.person[1].name} age ={personState.person[1].age}/>
       <Person name={personState.person[2].name} age ={personState.person[2].age}/>
       <Person name={personState.person[3].name} age ={personState.person[3].age}/>
      </div>
    );
  }
}

export default App;

//Merge comment to test git function
//Added comment to test next one
//updated directlyin git hub
 
