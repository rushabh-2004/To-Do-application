function Taskcard({task}) {
  return (
    <div className="card">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>{task.category}</p>
      <span className={`priority ${task.priority.toLowerCase()}`}>
        {task.priority}
      </span>
      <br></br>
      <button>Complete</button>
    </div>
  );
}
export default Taskcard;
