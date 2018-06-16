import React from 'react';
import WorkExample from '../components/WorkExample';
import workData from '../../data/work.json';

const WorkSection = () => {
    const renderWorkExample = workDataItem => (
        <WorkExample
            {...workDataItem}
            animation="fadeInUp"
            animationDelay="0"
        />
    );
    
    return (
        <div className="container-fluid light-grey work text-center">
            <div className="row">
                <div className="col-sm-12">
                    <h2 data-animation="fadeInUp">
                        My Work
                    </h2>
                </div>
                <div className="slick">
                    {workData.map(renderWorkExample)}
                </div>
            </div>
        </div>
    );
};

export default WorkSection;