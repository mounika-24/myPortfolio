import React from 'react';
import '../assets/styles/Home.scss';

const Home: React.FC = (): JSX.Element => {
    return (
        <section className='home-page page'>
            <div className='home-intro'>
                <div className='welcome-msg'>
                    <p className='fs13 intro'>Hi there &#128075; my name is</p>
                    <p className=''><span className='fs30 name'>Mounika Mamidala.</span> </p>
                    <p className='fs15 position'>I am an enthusiast Front End Developer.</p>
                    <p className='fs12 greeting'>
                        Welcome to my portfolio. I designed this website using the basic Create React App setup and enhanced my styling with Sass for better scalability and maintainability.
                        I researched various portfolio websites for design inspiration. Notably, I did not use any CSS libraries. The color scheme
                        was inspired by designs I admired on&nbsp;
                        <a href='https://dribbble.com/shots/24541451-Web3Pulse-Website-design-of-the-crypto-accounting-platform'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='citation'>
                            Dribbble
                        </a>.
                    </p>
                    <div className='btn-container'>
                        {/* <a className='btn fs11' href='mailto:24mounika@gmail.com' rel='noopener noreferrer' target='_blank'>Contact</a> */}
                        <a className='btn fs11 resume-btn' href='./Mamidala_Mounika_resume.pdf' download='Mamidala_Mounika_Resume.pdf'>Resume</a>
                    </div>
                </div>
                <div className='intro-image'>
                    <div className='image-wrapper'>
                        <img src='./Mamidala_Mounika_Photo.JPG' className='profile-photo' />
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Home;