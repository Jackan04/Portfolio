import { Link } from 'react-router-dom'
import MoonIcon from '../assets/icons/moon.svg?react'

export default function Header(){

    function showDropdown(){
        const dropdown = document.querySelector("#dropdown-menu")
        dropdown.style.display = dropdown.style.display === "none" ? "flex" : "none";
    }

    return(
        <header>
            <Link to="/" className="header-logo">Jacob Asker</Link>
            
              <nav>
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                </nav>
                <div className='header-controls-mobile'>
                    <button className='theme-button-mobile'><MoonIcon></MoonIcon></button>
                    <button className="hamburger" onClick={showDropdown}>☰</button>
                    
                    <div className='dropdown-menu' id='dropdown-menu'>
                        <Link to="/">Home</Link>
                        <Link to="/projects">Projects</Link>
                        <a href="mailto: jacob.asker@icloud.com">Contact</a>
                    </div>
                </div>

                <div className="header-controls">
                    <button className='theme-button'><MoonIcon></MoonIcon></button>
                    <a href="mailto: jacob.asker@icloud.com">Contact</a>
                </div>
            
        </header>
    )
}