import React from 'react';
import MobNav from './MobNav';
import Nav from './Nav';
import MyWork from './WorkSection';
import MyExp from './ExperienceSection';
import MySkills from './SkillsSection';
import GetInTouch from './GetInTouch';
import Intro from './Intro';
import Footer from './Footer';


const Page = () => (
    <main>
        <MobNav />
        <Nav />
        <Intro />
        <MyWork />
        <MyExp />
        <MySkills />
        <GetInTouch />
        <Footer />
    </main>
);

export default Page;