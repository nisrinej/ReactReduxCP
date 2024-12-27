import { Routes, Route, Link } from 'react-router-dom';
import ListTask from './Components/ListTask';
import AddTask from './Components/AddTask';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            To-Do App
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/addTask">
                  Add Task
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<ListTask />} />
        <Route path="/addTask" element={<AddTask />} />
      </Routes>
    </div>
  );
}

export default App;
