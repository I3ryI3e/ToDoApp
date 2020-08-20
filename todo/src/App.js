import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import "./css/styles.css";
import DashBoard from "./components/DashBoard";
import Login from "./components/Login";
import Register from "./components/Register";


function App() {
  return (
    <Router>
        <nav className="nav-bar">
            <Link className="nav-bar-button" to="/login">LogIn</Link>
            <Link className="nav-bar-button" to="/register">Register</Link>
        </nav>
        <Switch>
            <Route path="/dashboard">
                <DashBoard/>
            </Route>
            <Route path="/login">
                <Login/>
            </Route>
            <Route path="/register">
                <Register/>
            </Route>
            <Route path="/">
                <h3>BAHH</h3>
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
