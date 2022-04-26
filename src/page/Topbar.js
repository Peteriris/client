import React from "react";
import "../style/page.css";
import { BrowserRouter,Link } from "react-router-dom";

export default function Topbar() {
  return (
    <header>
      <div className="topbar">
        <div className="topbarWrapper">
          
          <div className="topLeft">
            <span className="logo">REDCARD</span>
          </div>


          <div className="topRight">
            <BrowserRouter>
              <Link to="/" className="naveitemList">Login</Link >
              <Link to="/signup" className="naveitemList">/sign up</Link>
            </BrowserRouter>
        </div>

        </div>
      </div>
    </header>
  );
}