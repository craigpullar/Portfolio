import React from 'react';
import Experience from '../components/ExperienceHighlight';
import experienceData from '../../data/experience.json';

const ExperienceSection = () => {
    const renderExperienceHighlight = experienceDataItem => (
        <Experience
            {...experienceDataItem}
            animation="fadeInUp"
            animationDelay="0"
        />
    );

    return (
        <div className="container-fluid experience text-center">
            <div className="row">
                <div className="col-sm-12">
                    <h2 data-animation="fadeInUp">My Experience</h2>
                    <div className="slick">
                        {experienceData.map(renderExperienceHighlight)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExperienceSection;