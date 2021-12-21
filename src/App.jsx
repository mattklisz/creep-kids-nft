import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Routes } from './routes'
import { Home } from './views'
import './App.css'
import WEB3_CONNECT from './components/web3/web3_connect'

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
