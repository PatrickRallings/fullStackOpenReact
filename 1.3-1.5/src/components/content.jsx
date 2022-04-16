import Part from './part.jsx'

const Content = (props) => {
  return (
    <div>
      <Part part={props.obj.parts[0].name} exercise={props.obj.parts[0].exercises} />
      <Part part={props.obj.parts[1].name} exercise={props.obj.parts[1].exercises} />
      <Part part={props.obj.parts[2].name} exercise={props.obj.parts[2].exercises} />
      <hr />
    </div>
  );
};

export default Content;