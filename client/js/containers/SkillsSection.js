// import Skill from "./Skill";
import React from 'react';
import ReactDOM from 'react-dom';
import skills from '../../data/skills.json';
import Skill from '../components/Skill';


const MySkillsSection = () => {
    const renderSkill = skillData => (
        <Skill
            {...skillData}
            animation="fadeInUp"
            animationDelay="0"
        />
    );

    return (
        <div className="container-fluid light-grey skills text-center">
            <div className="row">
                <div className="col-sm-12">
                    <h2 data-animation="fadeInUp">
						My Skills
                    </h2>
                    {skills.map(renderSkill)}
                </div>
            </div>
        </div>
    );
};

export default MySkillsSection;
