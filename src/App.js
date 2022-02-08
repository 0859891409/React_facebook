import '../src/CSS/App.css';
import Login from "./Page/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Dashboard from "./Page/Dashboard";
import { useState } from "react";
function App() {
  const [isAuth, setIsAuth] = useState(false);
  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        isAuth === true ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
  return (
    <Router>
      
        <Switch>
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <Route path="/">
            <Login setIsAuth={setIsAuth} />
          </Route>
        </Switch>
      
    </Router>
  );
}

export default App;
