import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Cv from './cv.svg';
import certificate from './certs.svg';
import projects from './projects.svg';




class Home extends Component {

    render() {
        return(
             <div>
              <div className="text-center">
                <Link to="resume"><img src={Cv} alt="resume" className="cv" /></Link>
              </div>
              <div className="text-left">
                <Link to="certification"><img src={certificate} alt="certification" className="certification"  /></Link>
              </div>
              <div className="text-right">
                <Link to="project"><img src={projects} alt="projects" className="project" /></Link>
              </div>
          </div>
        );
    }
}
export default Home;