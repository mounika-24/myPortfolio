import React from 'react';
import rawWorkData from '../Work.json';
import Projects from './Projects';

interface projectsData {
    Title: string;
    Description: string;
    Skills: string[];
}

interface WorkDataType {
    Companies:{
        Company: string;
        Location?: string;
        JoiningDate: string;
        EndingDate: string;
        Position: string;
        Projects: projectsData[];
    }[]
    
}

// Asserting the type of the imported JSON data
const workData: WorkDataType = rawWorkData as WorkDataType;

const Work: React.FC = (): JSX.Element => {

    return (
        <div className='company-section page'>
            {
                workData.Companies.map((workData, index) =>
                    <section className='company-profile'>
                        <h2 className='company-name'>{workData?.Position} @ {workData?.Company}</h2>
                        {/* <h4 className='company-location'>{workData?.Location}</h4> */}
                        <h5 className='tenure'>{workData?.JoiningDate} - {workData?.EndingDate}</h5>
                        {workData?.Projects.map((project,index)=><Projects data = {project} key={project.Title}/>)}
                    </section>
                )
            }
        </div>
    )
};

export default Work;