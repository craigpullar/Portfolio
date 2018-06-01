import React from 'react';
import Experience from '../components/Experience';
import experienceData from '../../data/experience.json';

const MyExpSection = () => {
    const renderExperience = experienceDataItem => (
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
                      {experienceData.map(renderExperience)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyExpSection;
