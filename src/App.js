
import './App.css';
import Login from './Page/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from './Page/Dashboard';
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/">
          <Login/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
