import Taskcard from "./TaskCard";

function Dashboard() {
  return (
    <main>
      <h1>Welcome back!</h1>
      <p>Here is your productivity overview.</p>
      <div className="container">
        <Taskcard title="Java Assignment" category="Study" priority="High" />
        <Taskcard title="Drink 5L Water" category="Fitness" priority="Medium" />
        <Taskcard title="Walk for 10mins" category="Fitness" priority="Low" />
      </div>
    </main>
  )
}
export default Dashboard;