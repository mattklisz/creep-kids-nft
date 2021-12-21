import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Routes } from './routes'
import { Home } from './views'
import './App.css'

const App = () => (
  <Router>
    <div className="App">
      <Switch>
        <Route path={Routes.HOME}>
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
)

export default App
