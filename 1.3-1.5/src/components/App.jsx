import React from "react";
import Header from './header.jsx'
import Content from './content.jsx'
import Total from './total.jsx'

const App = () => {
  const course = {
    name: "Half Stack Application Development",
    parts: [
      {
      name: "Fundamentals of React",
      exercises: 10
      },{
      name: "Using props to pass data",
      exercises: 7
      }, {
      name: "State of a component",
      exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content obj={course} />
      <Total obj={course} />
    </div>
  );
};

export default App;
