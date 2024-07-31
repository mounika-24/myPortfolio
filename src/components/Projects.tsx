import React from 'react';

interface ProjectsData {
    Title: string;
    Description: string;
    Skills: string[];
}

interface ProjectsProps {
    data: ProjectsData;
}

const Projects: React.FC<ProjectsProps> = ({ data }): JSX.Element => {
    // const descriptionArray = data.Description.split(".");
    const descriptionArray = data.Description.split('.').map(sentence => sentence.trim()).filter(Boolean);
    return (
        <section className='projects'>
            <div className='project-div'>
                <h2 className='project-title fs13'>{data.Title}</h2>
                <ul className='project-description'>
                    {
                        descriptionArray.map((point, index) =>
                            point && (<li className='fs10'>{point}.</li>)
                        )
                    }
                </ul>
                <div className='project-skills'>{data.Skills.map((skill) => <span className='skill-involved fs7' key={skill}>{skill}</span>)}</div>
            </div>
        </section>
    )
}

export default Projects;