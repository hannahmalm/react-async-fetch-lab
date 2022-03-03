// create your App component here
//Create an App class component from scratch
//Write a componentDidMount method.
// Inside the method, send a fetch request to http://api.open-notify.org/astros.json (Links to an external site.), a free API that returns a list of people currently in space.
import React, { Component } from "react";

class App extends Component {
 //define intial sate locally
 
    state = {
        peopleInSpace: [],
      };
    
      //return a list of the persons name
render() {
        return <div>{this.state.peopleInSpace.map((person) => person.name)}</div>;
      }
    

//similar to vanilla JS
//fetch the api
//wait for a response and convert to json,
//then take the daa and update the state to the data.people and put it in peolpleinSpace array
  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          peopleInSpace: data.people,
        });
      });
  }
}

export default App;