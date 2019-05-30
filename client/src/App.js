import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"

function App() {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />

          </Switch>
        </div>
      </Router>

    </div>
  );
}

export default App;