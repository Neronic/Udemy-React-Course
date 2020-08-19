import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const app = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Jacob", age: 26 },
      { name: "Nicholas", age: 26 },
      { name: "Mohit", age: 25 },
    ],
  });

  const [otherState, setOtherState] = useState("some other value");

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    //console.log("Was clicked");
    //DON'T DO THIS this.state.persons[0].name = "Steven";
    setPersonsState({
      persons: [
        { name: "Steven", age: 26 },
        { name: "Nich", age: 26 },
        { name: "Mo", age: 24 },
      ],
      otherState: personsState.otherState,
    });
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React app</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        My Hobbies: Sprite creation
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
  //return React.createElement("div",{ className: "App" },React.createElement("h1", null, "Does this work now?"));
};

export default app;
/*
state = {
  persons: [
    { name: "Jacob", age: 26 },
    { name: "Nicholas", age: 26 },
    { name: "Mohit", age: 25 },
  ],
  otherState: "some other value",
};

switchNameHandler = () => {
  //console.log("Was clicked");
  //DON'T DO THIS this.state.persons[0].name = "Steven";
  this.setState({
    persons: [
      { name: "Steven", age: 26 },
      { name: "Nich", age: 26 },
      { name: "Mo", age: 24 },
    ],
  });
};*/
