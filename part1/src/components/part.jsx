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

export default Part;