import MobNav from './MobNav';
import Nav from './nav';
import MyWork from './MyWork';
import MyExp from './MyExp';
import MySkills from './MySkills';
import GetInTouch from './GetInTouch';
import Intro from './Intro';
import Footer from './Footer';


import React from 'react';
import ReactDOM from 'react-dom';


class Page extends React.Component {
    render() {
        return (
          <div>
              <MobNav />
              <Nav />
              <Intro />
              <MyWork />
              <MyExp />
              <MySkills />
              <GetInTouch />
              <Footer />
            </div>
        );
    }
}

export { Page as default };

