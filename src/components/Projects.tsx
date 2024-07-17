import React from 'react';

interface ProjectsData {
    Title: string;
    Description: string;
    Skills: string[];
}

interface ProjectsProps {
    data: ProjectsData;
}

const Projects: React.FC<ProjectsProps>  = ({data}): JSX.Element => {
    // const descriptionArray = data.Description.split(".");
    const descriptionArray = data.Description.split('.').map(sentence => sentence.trim()).filter(Boolean);
    return(
        <section className='projects'>
            <div className='project-div'>
                <h3>{data.Title}</h3>
                <ul>
                    {
                        descriptionArray.map((point,index)=>
                            point && (<li>{point}.</li>)
                        )
                    }
                </ul>
                <p>{data.Skills.map((skill)=><span className='skill-involved' key={skill}>{skill}</span>)}</p>
            </div>
        </section>
    )
}

export default Projects;