import { useState } from "react";
import Taskcard from "./TaskCard";

function Dashboard() {
  const [category,setcatgory] = useState("all")
  const [tasks, settasks] = useState([
    {
      id: 1,
      title: "Java Assignment",
      description: "Need to complete the assigmnet by eod",
      category: "Study",
      priority: "High",
    },
    {
      id: 2,
      title: "Drink 5L Water",
      description: "Stay Hydrated",
      category: "Fitness",
      priority: "Medium",
    },
    {
      id: 3,
      title: "Walk for 10mins",
      description: "Health is wealth",
      category: "Fitness",
      priority: "Low",
    },
  ]);
  const filterdTasks = category === "all" ? tasks : tasks.filter((task)=>task.category === category)

  return (
    <main>
      <h1>Welcome back!</h1>
      <p>Here is your productivity overview.</p>
      <select name="task_category" id="category" value={category} onChange={(e)=>setcatgory(e.target.value)}>
        <option value="all">All</option>
        <option value="Study">Study</option>
        <option value="Fitness">Fitness</option>
      </select>
       
      
      <div className="container">
        {filterdTasks.map((task)=>(
          <Taskcard key={task.id} task={task}/>
        ))}
      </div>
    </main>
  );
}
export default Dashboard;
