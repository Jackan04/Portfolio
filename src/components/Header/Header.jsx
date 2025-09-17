import { Link } from 'react-router-dom'
import React, {useState, useEffect} from 'react';
import ToggleOnIcon from '../../assets/icons/toggle-on.svg?react'
import ToggleOffIcon from '../../assets/icons/toggle-off.svg?react'
import HamburgerIcon from '../../assets/icons/hamburger.svg?react'


import styles from './Header.module.css';

export default function Header(){
    const [dropdownOpen, setDropdownOpen] = useState(false)
    
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light"
    })


     useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark'); // Sets class of "dark" if condition returns true, else it removes the class from <html>-element
        localStorage.setItem('theme', theme);
    }, [theme]);
    
    function toggleTheme(){
        setTheme((prevTheme) => prevTheme === 'light' ? 'dark' : 'light');
    }
    

    return(
        <header className={styles.header}>
            <Link to="/" className={styles.headerLogo}>Jacob Asker</Link>

            <nav className={styles.nav}>
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
            </nav>

            <div className={styles.headerControlsMobile}>
                <button 
                    className={styles.themeButtonMobile}
                    onClick={toggleTheme}
                >
                    {theme === "light" ? <ToggleOffIcon className={styles.icon} /> : <ToggleOnIcon className={`${styles.icon} ${styles.toggleOn}`} />}
                </button>

                    <button className={styles.hamburger} onClick={() => setDropdownOpen(open => !open)}>
                        <HamburgerIcon className={styles.icon} />
                    </button>

                    <div className={`${styles.dropdownMenu} ${dropdownOpen ? 'open' : ''}`}>
                        <Link to="/" onClick={() => setDropdownOpen(false)}>Home</Link>
                        <Link to="/projects" onClick={() => setDropdownOpen(false)}>Projects</Link>
                        <a href="mailto: jacob.asker@icloud.com" onClick={() => setDropdownOpen(false)}>Contact</a>
                    </div>

            </div>
                    

            <div className={styles.headerControls}>
                <a href="mailto: jacob.asker@icloud.com">Contact</a>
                
                <button className={styles.themeButton} onClick={toggleTheme}>
                    {theme === "light" ? <ToggleOffIcon className={styles.icon} /> : <ToggleOnIcon className={`${styles.icon} ${styles.toggleOn}`} />}
                </button>
            </div>
        </header>
    )
}