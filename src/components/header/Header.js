import React, { useState } from 'react';
import "./header.css";
import logo from "../../assets/images/ABSs.png";
import { NavLink } from 'react-router-dom';
export default function Header() {

  const [userName, setUserName] = useState(""); // Store user name (if logged in)

 const [isLogged, setIsLogged] = useState(false);

  const handleLogin = () => {
    setIsLogged(true)

    console.log("log in");
    setUserName("Morad")

  };

  const handleLogout = () => {
    console.log("log in");
    setIsLogged(false)
  }

  return (
    <header className='header'>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <nav className='navbar'>
        <ul>
          <li><NavLink className="nav-links" to={`/`}>Home</NavLink></li>
          <li><NavLink className="nav-links" to={'emporiums'}>Emporiums</NavLink></li>
          <li><NavLink className="nav-links" to={'services'}>Services</NavLink></li>
          <li><NavLink className="nav-links" to={'about_us'}>About us</NavLink></li>

        </ul>
      </nav>
      <div className="login-section">
        {isLogged ? (
          // Display user information if logged in
          <div className="user-info">
            <p>{userName}</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          // Show login button if not logged in
          <button onClick={handleLogin}>Login</button>
        )}
      </div>
    </header>
  )
}
