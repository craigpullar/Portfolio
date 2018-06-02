import React from 'react';
import ReactDOM from 'react-dom';
import Site from '../components/WorkExample';
import workData from '../../data/work.json';

const MyWorkSection = () => {
    const renderSkill = workDataItem => (
      <Site
          {...workDataItem}
          animation="fadeInUp"
          animationDelay="0"
        />
    );
    return (
      <div className="container-fluid light-grey work text-center">
          <div className="row">
              <div className="col-sm-12">
                  <h2 data-animation="fadeInUp">My Work</h2>
                </div>
              <div className="slick">
                  {workData.map(renderSkill)}
                </div>
            </div>
        </div>
    );
};

export default MyWorkSection;
