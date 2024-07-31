import React from 'react';
import '../assets/styles/Footer.scss';

const Footer: React.FC = (): JSX.Element => {
    return (
        <section className='Footer'>
            <div className='social-div'>
            <i className="fa-brands fa-github fa-xl" aria-label='GitHub'></i>
            <i className="fa-brands fa-linkedin fa-xl" aria-label='Linkdin'></i>
            </div>
            <p className='foot-note fs7'> © 2024 - Design & Development by <span className='copyright-name'>Mamidala Mounika</span></p>
        </section>
    )
};

export default Footer;