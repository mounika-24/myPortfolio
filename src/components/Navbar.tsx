import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Navbar.scss';

const Navbar: React.FC = (): JSX.Element => {
    const fillColor = "transparent";
    const strokeColor = "#63f8fe";
    const [sideNavBar, setNavsideBar] = useState(false);
    const toggelSideNavBar = () => setNavsideBar(!sideNavBar);
    return (
        <section className='navigation-bar'>
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
                    {/* <div className='head-logo nav-item'>
                        Mounika Mamidala
                    </div> */}
                    <div className='nav-links-web nav-item fs10'>
                        <Link to="/" className='nav-link'><i className="fa-solid fa-house"></i>Home</Link>
                        <Link to="/about" className='nav-link'><i className="fa-solid fa-user"></i>About</Link>
                        <Link to="/work" className='nav-link'><i className="fa-solid fa-briefcase"></i>Work</Link>
                        <a className='nav-link' href='mailto:24mounika@gmail.com' rel='noopener noreferrer' target='_blank'>
                            <i className="fa-solid fa-envelope"></i>
                            Contact
                        </a>
                    </div>
                    <div className='hambuger-menu nav-item' onClick={toggelSideNavBar}>
                        <i className="fa-solid fa-bars-staggered fa-xl menu-icon"></i>
                    </div>
                </nav>
            </div>
            <div className={sideNavBar ? 'side-bar-nav active' : 'side-bar-nav'}>
                <div className='close-side-nav' onClick={toggelSideNavBar}>
                    <i className="fa-solid fa-xmark fa-2xl"></i>
                </div>
                <div className='nav-links-mobile nav-item fs14'>
                    <Link to="/" className='nav-link' onClick={toggelSideNavBar}>
                        <i className="fa-solid fa-house"></i>
                        Home
                    </Link>
                    <Link to="/about" className='nav-link' onClick={toggelSideNavBar}>
                        <i className="fa-solid fa-user"></i>
                        About
                    </Link>
                    <Link to="/work" className='nav-link' onClick={toggelSideNavBar}>
                        <i className="fa-solid fa-briefcase"></i>
                        Work
                    </Link>
                    <div className='contact-div'>
                        <p className='fs10 contact-msg'> If you want to know more about me then</p>
                        <a className='btn fs10' href='mailto:24mounika@gmail.com' rel='noopener noreferrer' target='_blank'>Get in touch</a>
                    </div>
                    {/* <div className='sitations-div'>
                        <i className="fa-solid fa-lightbulb bulb-icon"></i>
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default Navbar;