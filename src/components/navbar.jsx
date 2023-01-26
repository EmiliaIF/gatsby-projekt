import React from "react"
import { Link } from "gatsby"
import '../cssmodules/navbar.scss'

const Navbar = () => (
  <nav>
    <Link to="/" className="logo">
      Home
    </Link>
    <ul>
      <li>
        <Link to="/aboutme">About me</Link>
      </li>
      <li>
        <Link to="/projectpage">My Projects</Link>
      </li>
      {/* <li>
        <Link to="/blog">Blog</Link>
      </li> */}
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </nav>
)

export default Navbar
