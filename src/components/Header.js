
import React from "react"
import "../App.css"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";



function Header () {
    return (

        <Router>
    
        <div className="navigation">  
           <nav>
             <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
                </li>
            <li>
                <Link to="/contact">contact</Link>
                </li>
        </ul>
        </nav>
        <Switch>
          <Route path="/contact">
           
          </Route>
          <Route path="/about">
            
          </Route>
          <Route path="/">
            
          </Route>
        </Switch>
        </div>


        </Router>
    )
}

function Home() {
    return <h2>Home</h2>;
  }
  
  function About() {
    return <h2>About</h2>;
  }
  
  function contact() {
    return <h2>contact</h2>;
  }
  
  








export default Header;