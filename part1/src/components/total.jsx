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

export default Total;
