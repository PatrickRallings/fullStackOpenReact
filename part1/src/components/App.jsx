import React from "react";
import Header from './header.jsx'
import Content from './content.jsx'
import Total from './total.jsx'
// import Footer from './footer.jsx'

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
      {/* <Footer /> */}
    </div>
  );
};

export default App;
