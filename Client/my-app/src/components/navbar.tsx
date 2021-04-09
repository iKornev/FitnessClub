import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar: React.FunctionComponent = () => (
  <nav>
    <div className="nav-wrapper purple darken-2 px1">
      <a href="/" className="brand-logo">
        FC-Application
      </a>
      <ul className="right hide-on-med-and-down">
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/registration">Register</NavLink>
        </li>
        <li>
          <NavLink to="/programList">Programs List</NavLink>
        </li>
        <li>
          <NavLink to="/userProgramsList">User Programs</NavLink>
        </li>
        <li>
          <NavLink to="/adminProgramsList">Admin Programs</NavLink>
        </li>
      </ul>
    </div>
  </nav>
)