import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route} from 'react-router-dom';
import "./index.css";
import App from "./App";
import Login from './assets/Pages/Appointment/Login';
import Rooms from './assets/Pages/Rooms/Rooms';

ReactDOM.render(
  <Router>
    {/* <Route exact path="/" component={Login} /> */}
    <Route path="/" component={App} />
    {/* <Route path="/rooms" component={Rooms} /> */}
  </Router>,
  document.getElementById("root")
);
