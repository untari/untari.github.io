import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Cv from './cv.svg';
import certificate from './certs.svg';
import projects from './projects.svg';
import Line1 from './line1.svg';
import Line2 from './line3.svg';
import Line3 from './line3-1.svg';

class Home extends Component {

    render() {
        return(
             <div >
              <div className="center">
                <Link to="resume"><img src={Cv} alt="resume" className="cv" /></Link>
                <img src={Line1} alt="line1" className="line1"/>
              </div>
              <div className="text-left">
                <Link to="certification"><img src={certificate} alt="certification" className="certification"  /></Link>
                 <img src={Line2} alt="line1" className="line2"/>
              </div>
              <div className="text-right">
                <Link to="project"><img src={projects} alt="projects" className="project" /></Link>
                <img src={Line3} alt="line3" className="line3"/>
              </div>

          </div>
        );
    }
}
export default Home;