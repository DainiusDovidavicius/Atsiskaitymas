import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
        <img src="" alt="" />
        <nav>
          <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/news"><li>News</li></Link>
            <Link to="/aboutus"><li>AboutUs</li></Link>
            <Link to="/contacts"><li>Contacts</li></Link>
          </ul>
        </nav>
    </header>
  )
}

export default Header