import React from 'react';
import '../assets/styles/Footer.scss';

const Footer: React.FC = (): JSX.Element => {
    return (
        <section className='Footer'>
            <div className='social-div'>
                <a href='https://github.com/mounika-24' aria-label='GitHub' title='GitHub' rel='noopener noreferrer' target='_blank'>
                    <i className="fa-brands fa-github fa-xl" ></i>
                </a>
                <a href='https://www.linkedin.com/in/mounika-mamidala-825446b9' aria-label='Linkdin' title='Linkdin' rel='noopener noreferrer' target='_blank'>
                    <i className="fa-brands fa-linkedin fa-xl" ></i>
                </a>
                <a href='https://www.instagram.com/mounika_1_618/' aria-label='Instagram' title='Instagram' rel='noopener noreferrer' target='_blank'>
                <i className="fa-brands fa-instagram fa-xl"></i>
                </a>
            </div>
            <p className='foot-note fs7'> © 2024 - Design & Development by <span className='copyright-name'>Mamidala Mounika</span></p>
        </section>
    )
};

export default Footer;