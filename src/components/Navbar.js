import React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <div className="menu__container">
            <ul>
              <li className="nav-item">
                <Link to="/">Главная</Link>
              </li>
              <li className="nav-item">
                <Link to="">Галлерея</Link>
              </li>
              <li className="nav-item">
                <Link to="">Студии</Link>
              </li>
              <li className="nav-item">
                <Link to="">Обо мне</Link>
              </li>
            </ul>
          </div>
  )
}

export default Navbar
