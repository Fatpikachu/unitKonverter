import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class NavBar extends Component {
  constructor() {
    super();
  }


render(){ 
  return (
      <div className='navbar'>
        <NavLink activeClassName='is-active' className='banner liquid-link' to='/liquid' style={{ textDecoration: 'none' }}>Liquids</NavLink>
        <NavLink activeClassName='is-active' className='banner length-link'to='/length' style={{ textDecoration: 'none' }}>Lengths</NavLink> 
        <NavLink activeClassName='is-active' className='banner weight-link'to='/weight' style={{ textDecoration: 'none' }}>Weights</NavLink>
        <NavLink activeClassName='is-active' className='banner temperature-link'to='/temperature' style={{ textDecoration: 'none' }}>Temperature</NavLink>
      </div>
    );
  }
}

export default NavBar;