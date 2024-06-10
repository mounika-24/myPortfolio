import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Navbar.scss';

const Navbar: React.FC = (): JSX.Element => {
    return(
        <section className='pages-navigation'>
            <div className='nav-container'>
                <nav className='navbar'>
                    <div className='head-logo nav-item'>
                        Mounika Mamidala
                    </div>
                    <div className='nav-links nav-item'>
                        <Link to="/" className='nav-link'>Home</Link>
                        <Link to="/about" className='nav-link'>About</Link>
                        <Link to="/projects" className='nav-link'>Album</Link>
                    </div>
                    
                </nav>
            </div>
        </section>
    )
}

export default Navbar;