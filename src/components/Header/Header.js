import React from 'react'
import "./Header.css"
const Header = () => (
    <header className="header-content">
        <nav>
            <ul id="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
        <div id="user-management">
            <a href="#">Register</a>
            <a href="#">Log in</a>
        </div>
    </header>
)

export default Header;