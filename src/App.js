import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    person : [
      {name: "Vikky", age: 10},
      {name: "Rikky", age: 20},
      {name: "Nikky", age: 30},
      {name: "Mikky", age: 40}
    ]
  };

  //Merge comment to test git function
  //Added comment to test next one
//updated directlyin git hub
   
  switchStateHandler = () =>{
    this.setState({
      person : [
        {name: "New Vikky", age: 10},
        {name: "Rikky", age: 20},
        {name: "Nikky", age: 30},
        {name: "Mikky", age: 100}
      ]
    })
  }
  render() {
    return (
      <div className="App">
       <h1>Hello this is my First React App</h1>
       <p>I am loving it</p>
       <button onClick={this.switchStateHandler}>Update me</button>
       <Person name={this.state.person[0].name} age ={this.state.person[0].age}/>
       <Person name={this.state.person[1].name} age ={this.state.person[1].age}/>
       <Person name={this.state.person[2].name} age ={this.state.person[2].age}/>
       <Person name={this.state.person[3].name} age ={this.state.person[3].age}/>
      </div>
    );
  }
}

export default App;
