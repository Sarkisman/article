import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

export default function Navbar() {
  return (
    <header className="header">
      <div className="conteiner">
        <div className="header-top"></div>
        <div className="header-bottom flex">
          <nav className="header-nav">
            <ul className="list">
              <li className="listing">
                <Link to="/" className="header-link">
                  Список статей
                </Link>
              </li>
              <li className="listing">
                <Link to="/new-article" className="header-link">
                  Новая статья
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
