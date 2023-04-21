import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavComponent.css';

const NavComponent = () => {
  return (
    <nav className="nav-menu">
      <ul className="nav-list">
        <li>
          <NavLink exact to="/" activeClassName="active-link">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active-link">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active-link">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};



export default NavComponent;
