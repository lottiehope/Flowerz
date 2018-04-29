import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Navigation extends Component {
  render() {
    return (
      <header>
        <ul id="navBar">
          <img src="logo.png" alt="Flowerz logo" />
          <li className="navButton"><Link to="">Home</Link></li>
          <li className="navButton"><Link to="">About</Link></li>
          <li className="navButton"><Link to="">Shop</Link></li>
          <li className="navButton"><Link to="">Contact</Link></li>
        </ul>
      </header>
    )
  }
}
export default Navigation;