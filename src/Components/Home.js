import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Bulb2 from './bulb2.svg';
import Profile from './resume.png';
import certificate from './certificate.png';
import Js from './Js.png';




class Home extends Component {

    render() {
        return(
          <div>

              <div className="text-center">
                <Link to="resume"><img src={Profile} alt="resume" height="50" widht="50" /></Link>
              </div>
              <div className="text-left">
                <Link to="certification"><img src={certificate} alt="certification" className="certification" height="50" widht="50" /></Link>
              </div>
              <div className="text-right">
                <Link to="project"><img src={Js} alt="projects"  height="50" widht="50" /></Link>
              </div>
          </div>
        );
    }
}
export default Home;
