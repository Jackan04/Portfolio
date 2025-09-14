import { Link } from 'react-router-dom'
import React, {useState} from 'react';
import MoonIcon from '../../assets/icons/moon.svg?react'
import SunIcon from '../../assets/icons/sun.svg?react'
import styles from './Header.module.css';

export default function Header(){
    const [theme, setTheme] = useState("light")
    const [dropdownOpen, setDropdownOpen] = useState(false)

    function toggleTheme(){
        setTheme((prevTheme) => {
            const nextTheme = prevTheme === 'light' ? 'dark' : 'light';
            document.documentElement.classList.toggle('dark', nextTheme === 'dark');
            return nextTheme;
        });
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
                    {theme === "light" ? <MoonIcon className={styles.icon} /> : <SunIcon className={styles.icon} />}
                </button>

                <button className={styles.hamburger} onClick={() => setDropdownOpen(open => !open)}>☰</button>
                <div className={`${styles.dropdownMenu} ${dropdownOpen ? 'open' : ''}`}>
                    <Link to="/">Home</Link>
                    <Link to="/projects">Projects</Link>
                    <a href="mailto: jacob.asker@icloud.com">Contact</a>
                </div>

            </div>
                    

            <div className={styles.headerControls}>
                <a href="mailto: jacob.asker@icloud.com">Contact</a>
                
                <button className={styles.themeButton} onClick={toggleTheme}>
                    {theme === "light" ? <MoonIcon className={styles.icon} /> : <SunIcon className={styles.icon} />}
                </button>
            </div>
        </header>
    )
}