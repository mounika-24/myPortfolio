import React from 'react';
import rawWorkData from '../Work.json';
import Projects from '../components/Projects';
import '../assets/styles/Work.scss';

interface projectsData {
    Title: string;
    Description: string;
    Skills: string[];
}

interface WorkDataType {
    Companies: {
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
            <h1 className='section-heading'>My Work Experience</h1>
            {
                workData.Companies.map((workData, index) =>
                    <section className='company-profile'>
                        <h2 className='company-name fs15'>{workData?.Position} @ {workData?.Company}
                            <span className='tenure fs7'>{workData?.JoiningDate} - {workData?.EndingDate}</span>
                        </h2>
                        {/* <h4 className='company-location'>{workData?.Location}</h4> */}
                        {workData?.Projects.map((project, index) => <Projects data={project} key={project.Title} />)}
                    </section>
                )
            }
        </div>
    )
};

export default Work;