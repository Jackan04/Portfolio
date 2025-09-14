import { Link } from 'react-router-dom'

export default function Header(){

    return(
        <header>
            <Link to="/" className="header-logo">Jacob Asker</Link>
            
              <nav>
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                </nav>
                <div className='header-controls-mobile'>
                    <button className='theme-button-mobile'>Theme</button>
                    <button className="hamburger">☰</button>
                </div>

            <div className="header-controls">
                <button className='theme-button'>Theme</button>
                <a href="mailto: jacob.asker@icloud.com">Contact</a>
            </div>
            
        </header>
    )
}