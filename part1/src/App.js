import React from "react";

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
      <hr />
    </div>
  );
};

const Part = (props) => {
  return (
    <div>
      <h2>
        <i>{props.part}</i>
      </h2>
      <ul>
        <li>
          <h3>Number of Exercises: {props.exercise}</h3>
        </li>
      </ul>
    </div>
  );
};

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} exercise={props.exercise1}/>
      <Part part={props.part2} exercise={props.exercise2}/>
      <Part part={props.part3} exercise={props.exercise3}/>
      <hr />
    </div>
  );
};

const Total = (props) => {
  return (
    <div>
      <i>
        <h4>
          Total Exercises:{" "}
          {props.exercises1 + props.exercises2 + props.exercises3}
        </h4>
      </i>
      <hr />
    </div>
  );
};

const App = () => {
  const course = "Half Stack Application Development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1}
        exercise1={exercises1}
        part2={part2}
        exercise2={exercises2}
        part3={part3}
        exercise3={exercises3}
      />
      <Total
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
    </div>
  );
};

export default App;
