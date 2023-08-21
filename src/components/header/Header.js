import React, { useState } from 'react';
import "./header.css";
import logo from "../../assets/images/ABSs.png";
import { Link, NavLink } from 'react-router-dom';
export default function Header() {
  const [loggedIn, setLoggedIn] = useState(false); // Track login state
  const [userName, setUserName] = useState(""); // Store user name (if logged in)

  // Function to handle login (example, replace with actual login logic)
  const handleLogin = () => {
    // Implement your login logic here
    // For now, we'll just toggle the login state
    if (loggedIn) {
      setLoggedIn(false);
      setUserName("");
    } else {
      setLoggedIn(true);
      setUserName("John Doe"); // Replace with the user's actual name
    }
  };

  return (
    <header className='header'>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <nav className='navbar'>
        <ul>
         <li><NavLink className="nav-links" to={`/`}>Home</NavLink></li> 
          <li><NavLink className="nav-links" to={'shops'}>Shops</NavLink></li>
          <li><NavLink className="nav-links" to={'services'}>Services</NavLink></li>
          <li><NavLink className="nav-links" to={'about_us'}>About us</NavLink></li>
         
        </ul>
      </nav>
      <div className="login-section">
        {loggedIn ? (
          // Display user information if logged in
          <div className="user-info">
            <p>{userName}</p>
          </div>
        ) : (
          // Show login button if not logged in
          <button onClick={handleLogin}>Login</button>
        )}
      </div>
    </header>
  )
}
