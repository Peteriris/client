import React from "react";
import '../src/style/App.css';
import Topbar from"./page/Topbar";
import Bootumbar from"./page/Bootumbar";
import Login from "./components/Login"
import Signup from "./components/Signup"
import Welcome from "./components/Welcome"

//import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Topbar/>
      {/* <Router>
          <Routes>
            <Route path="/">
              <Login/>
            </Route>
            <Route path="/signup">
              <Signup/>
            </Route>
          </Routes>
        </Router> */}
        <Welcome/>
      <Bootumbar/>
    </div>
  );
}

export default App;
