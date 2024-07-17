import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Navbar.scss';

const Navbar: React.FC = (): JSX.Element => {
    const fillColor = "transparent";
    const strokeColor = "#ebc4f5";
    return (
        <section className='pages-navigation'>
            <div className='nav-container-web'>
                <nav className='navbar'>
                    <div className='logo-container'>
                        <svg id="m-logo" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 84 96" >
                            <title>M Logo</title>
                            <polygon
                                fill={fillColor}
                                stroke={strokeColor}
                                strokeWidth="5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                points="42 3 3 24.5 3 71.5 42 93 81 71.5 81 24.5"
                            />
                            <text
                                x="42"  // Center of viewBox width
                                y="57"  // Approximately center of viewBox height
                                dominantBaseline="middle"
                                textAnchor="middle"
                                style={{ fontSize: '50px', fill: strokeColor }}  // Smaller font size for better fit
                            >
                                M
                            </text>
                        </svg>
                    </div>
                    <div className='head-logo nav-item'>
                        Mounika Mamidala
                    </div>
                    <div className='nav-links nav-item'>
                        <Link to="/" className='nav-link'>Home</Link>
                        <Link to="/about" className='nav-link'>About</Link>
                        <Link to="/work" className='nav-link'>Work</Link>
                    </div>

                </nav>
            </div>
        </section>
    )
}

export default Navbar;