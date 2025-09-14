import { Link } from 'react-router-dom'
import React, {useState} from 'react';
import MoonIcon from '../assets/icons/moon.svg?react'
import SunIcon from '../assets/icons/sun.svg?react'

export default function Header(){
    const [theme, setTheme] = useState("light")

    function showDropdown(){
        const dropdown = document.querySelector('#dropdown-menu');
        dropdown.classList.toggle('open');
    }

    function toggleTheme(){
        setTheme((prevTheme) => {
            const nextTheme = prevTheme === 'light' ? 'dark' : 'light';
            document.documentElement.classList.toggle('dark', nextTheme === 'dark');
            
            return nextTheme;
        });
    }

    return(

        <header>
            <Link to="/" className="header-logo">Jacob Asker</Link>

            <nav>
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
            </nav>

            <div className='header-controls-mobile'>

            <button 
                className='theme-button-mobile' 
                onClick={toggleTheme}>
                {theme === "light" ? <MoonIcon className="icon"></MoonIcon> : <SunIcon className="icon"></SunIcon>}
            </button>

            <button className="hamburger" onClick={showDropdown}>☰</button>

            <div className='dropdown-menu' id='dropdown-menu'>
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <a href="mailto: jacob.asker@icloud.com">Contact</a>
            </div>

            </div>

            <div className="header-controls">
                <a href="mailto: jacob.asker@icloud.com">Contact</a>
                <button className='theme-button' onClick={toggleTheme}><MoonIcon className="icon"></MoonIcon></button>
            </div>
            
        </header>
    )
}