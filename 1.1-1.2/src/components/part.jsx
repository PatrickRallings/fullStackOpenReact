const Part = (props) => {
  return (
    <div>
      <h2>
        <i>{props.part}</i>
      </h2>

      <p>Number of Exercises: {props.exercise}</p>
    </div>
  );
};

export default Part;
