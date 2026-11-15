function Taskcard(props) {
  return (
    <div className="card">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <p>{props.category}</p>
      <span className={`priority ${props.priority.toLowerCase()}`}>
        {props.priority}
      </span>
      <br></br>
      <button>Complete</button>
    </div>
  );
}
export default Taskcard;
