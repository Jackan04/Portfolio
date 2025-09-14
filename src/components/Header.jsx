import { Link } from 'react-router-dom'

export default function Header(){

    return(
        <header>
            <h1 className="header-logo">Jacob</h1>
            
              <nav>
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                </nav>

            <div className="header-controls">
                <button className='theme-button'>Toggle Theme</button>
                <a href="mailto: jacob.asker@icloud.com">Contact</a>
            </div>
            
        </header>
    )
}