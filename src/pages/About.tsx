import React, { useEffect, useRef, useState } from 'react';
import '../assets/styles/About.scss';

const About: React.FC = (): JSX.Element => {
    const [isVisible, setIsVisible] = useState(false);
    const skillsDivRef = useRef(null);

    useEffect(() => {
        const skillsDiv = skillsDivRef.current;
        const observer = new IntersectionObserver(
            entries => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                }
                // else {
                //     setIsVisible(false); 
                // }
                // Optional: Set visible false when element goes out of viewport if needed to animate
                // everytime we component moves and comes back to the viewport
            },
            {
                threshold: 0.5 // Trigger when at least 50% of the element is visible
            }
        );

        if (skillsDiv) {
            observer.observe(skillsDiv);
        }

        return () => {
            if (skillsDiv) {
                observer.unobserve(skillsDiv);
            }
        };
    }, []);

    return (
        <div className='about-page page'>
            <section className='about about-me'>
                <h1 className='section-heading'>About Me</h1>
                <p>
                    Hi, I'm Mamidala Mounika, a committed Frontend Developer with a Bachelor of Technology in Electronics and Communication Engineering from Shiv Nadar University.
                    My professional journey in technology started in the electronics sector, where I developed a robust problem-solving mindset and a keen eye for innovation.
                    My passion for web technologies steered me toward a career in IT, beginning with a comprehensive course in web development.
                </p>
                <p>
                    Since May 2022, I've been deeply involved in the field, initially as a junior developer at Zivame, a leading e-commerce company.
                    Here, I took on a pivotal role in the end-to-end development of the Home page project.
                    This role involved making key decisions on API structures in collaboration with the backend teams and maintaining constant
                    communication with UI/UX designers to ensure any necessary changes were seamlessly integrated. This experience underscored my ability to manage and lead
                    major projects independently, ensuring high-quality outcomes that align with strategic business goals.
                </p>
                <p>
                    I am currently on the lookout for new opportunities that challenge me to further develop my skills and take on substantial responsibilities in frontend development.
                    My goal is to contribute to projects that not only enhance user experiences but also drive significant business results.
                    In my downtime, I enjoy exploring fantasy novels and digital photography, which fuel my creativity and enhance my professional endeavors.
                </p>
                <p>
                    If you're interested and wish to discuss potential opportunities, please  &nbsp;<a className='contact-me' href='mailto:24mounika@gmail.com' rel='noopener noreferrer' target='_blank'>contact me</a>.
                </p>
                {/* (mailto:your.email@example.com) or connect with me on [LinkedIn](your-linkedin-url).  */}
                <p>
                    Thank you for visiting my portfolio!
                </p>
            </section>
            <section className='skills' ref={skillsDivRef}>
                <h1 className='skills-title section-heading'>Skills</h1>
                <div className='skill-list'>
                    <div className={isVisible ? 'skill-div skill-animate' : 'skill-div'}>
                        <img alt='ReactJS' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" className='skill-img' />
                        <span className='skill-name'>React.js</span>
                    </div>
                    <div className={isVisible ? 'skill-div skill-animate' : 'skill-div'}>
                        <img alt='CSS' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" className='skill-img' />
                        <span className='skill-name'>CSS</span>
                    </div>
                    <div className={isVisible ? 'skill-div skill-animate' : 'skill-div'}>
                        <img alt='HTML' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" className='skill-img' />
                        <span className='skill-name'>HTML</span>
                    </div>
                    <div className={isVisible ? 'skill-div skill-animate' : 'skill-div'}>
                        <img alt='JavaScript' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" className='skill-img' />
                        <span className='skill-name'>JavaScript</span>
                    </div>
                    <div className={isVisible ? 'skill-div skill-animate' : 'skill-div'}>
                        <img alt='NodeJs' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" className='skill-img' />
                        <span className='skill-name'>Node.js</span>
                    </div>
                    <div className={isVisible ? 'skill-div skill-animate' : 'skill-div'}>
                        <img alt='NextJs' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg" className='skill-img' />
                        <span className='skill-name'>Next.js</span>
                    </div>
                    <div className={isVisible ? 'skill-div skill-animate' : 'skill-div'}>
                        <img alt='jquery' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original-wordmark.svg" className='skill-img' />
                        <span className='skill-name'>jQuery</span>
                    </div>
                    <div className={isVisible ? 'skill-div skill-animate' : 'skill-div'}>
                        <img alt='handlebars' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/handlebars/handlebars-original-wordmark.svg" className='skill-img' />
                        <span className='skill-name'>Handlebars</span>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default About;