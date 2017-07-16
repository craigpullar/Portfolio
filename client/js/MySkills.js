// import Skill from "./Skill";
import React from 'react';
import ReactDOM from 'react-dom';
import skills from "./skills.json";
import Skill from "./Skills.js";

class MySkills extends React.Component {
	render() {
		const skills_render = skills.map((skill) =>
			<Skill 
			type={skill.type}
			text={skill.text}
			animation="fadeInUp"
			animationDelay="0"
			/>
			);
			return (
			<div className="container-fluid light-grey skills text-center">	
			<div className="row">
			<div className="col-sm-12">
			<h2 data-animation="fadeInUp">My Skills</h2>	
			{skills_render}
			</div>
			</div>
			</div>
			);
		}
	}

	export {MySkills as default};
