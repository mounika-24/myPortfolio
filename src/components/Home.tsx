import React from 'react';
import '../assets/styles/Home.scss';

const Home: React.FC = (): JSX.Element => {
    return(
        <section className='home-section'>
            <div className='home-page'>
            <section className='intro'>
                <p>Welcome to my portfolio</p>
                <p>Hi &#128075;, I am Mounika, a frontend developer specializing in React</p>
                
            </section>
            <section className='skills'>
                <h2>Skills</h2>
                <ul className='skill-list'>
                    <li className='skill-div'>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" style={{"height":"3rem"}} />
                    </li>
                    <li className='skill-div'>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" style={{"height":"3rem"}} />        
                    </li>
                    <li className='skill-div'>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" style={{"height":"3rem"}} />
                    </li>
                    <li className='skill-div'>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" style={{"height":"3rem"}} />
                    </li>
                    <li className='skill-div'>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" style={{"height":"3rem"}} />
                    </li>
                    <li className='skill-div'>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg" style={{"height":"3rem"}} />
                    </li>
                    <li className='skill-div'>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original-wordmark.svg" style={{"height":"3rem"}} />
                    </li>
                    <li className='skill-div'>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/handlebars/handlebars-original-wordmark.svg" style={{"height":"3rem"}} />
                    </li>
                </ul>
            </section>
            </div>
            
        </section>
    )
}

export default Home;