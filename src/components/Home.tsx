import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Home.scss';

const Home: React.FC = (): JSX.Element => {
    return(
        <section className='home-section'>
            <div className='home-page'>
            <section className='intro'>
                <p>Welcome to my portfolio</p>
                <p>Hi, I am Mounika, a frontend developer specializing in React</p>
                
            </section>
            <section className='skills'>
                <h2>Skills</h2>
                <ul>
                    <li>ReactJS</li>
                    <li>CSS</li>
                    <li>HTML</li>
                    <li>NextJS</li>
                    <li>jQuery</li>
                    <li>Handlebars</li>
                </ul>
            </section>
            </div>
            
        </section>
    )
}

export default Home;