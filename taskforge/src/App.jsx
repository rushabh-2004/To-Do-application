import './App.css'
import Sidebar from '../components/Sidebar'
import Dashboard from '../components/Dashboard'
import Navbar from '../components/Navbar'

function App() {
  return (
    <div>
      <Navbar />
      <div className="app-layout">
        <Sidebar />
        <Dashboard/>
         
      </div>
    </div>
  )
}

export default App
