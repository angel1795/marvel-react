import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./Home"
import Terms from "./Terms"
ReactDOM.render(
  <React.StrictMode>
     <Router>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" to="/" >Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/terms" >Términos</Link>
        </li>
       
       
      </ul>
      
    </div>
  </div>
</nav>
  <div>
    <Switch>
      <Route path="/" exact><Home /></Route>
      <Route path="/terms"><Terms /></Route>
    </Switch>
  </div>
    
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
