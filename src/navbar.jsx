import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class NavBar extends Component {
  constructor() {
    super();
  }


render(){ 
  return (
      <div className='navbar'>
        <NavLink to='/liquid'>Liquids</NavLink>
        <NavLink to='/length'>Lengths</NavLink> 
        <NavLink to='/weight'>Weights</NavLink>
      </div>
    );
  }
}

export default NavBar;