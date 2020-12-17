import React from 'react'
import "./Header.css"
const Header = ({onClickLogin, onClickLogout, isLogged}) => (
    <header className="header-content">
        <nav>
            <ul id="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
        <div id="user-management">
            { !isLogged && <a href="#">Register</a> }
            { !isLogged
            ? <input type="submit" value="Login" onClick={onClickLogin} className="header-button-login"/>
            : <input type="submit" value="Logout" onClick={onClickLogout} className="header-button-logout" id="logout"/>
            }
        </div>
    </header>
)

export default Header;