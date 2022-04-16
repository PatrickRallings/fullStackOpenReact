const Total = (props) => {
  return (
    <div>
      <i>
        <h4>
          Total Exercises:{" "}
          {props.obj.parts[0].exercises+ props.obj.parts[1].exercises + props.obj.parts[2].exercises}
        </h4>
      </i>
      <hr />
    </div>
  );
};

export default Total;