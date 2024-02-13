import React from 'react'

import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <ul style={{textDecoration: none}}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <link to="/contact">Contact</link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;