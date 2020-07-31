import React, { Component, useState } from 'react';
import { Link } from "react-router-dom";
import Cv from './cv.svg';
import certificate from './certs.svg';
import projects from './projects.svg';
import {  UncontrolledTooltip } from 'reactstrap';




const Home = (props) => {
      
 
       return(
             <div id="div1">
                <div className="col align-self-end "  id="projects">
                        <div className=" col-12 col-md m-1 md-auto " >
                            <Link to="project"><img src={projects} alt="projects"  className="img-responsive" width="60" height="40"/></Link>
                             
                        </div>
                    </div>
                    <div className="col align-self-center" id="certs">
                            <div className=" col-12 col-md m-1 md-auto ">
                                    <Link to="certification"><img src={certificate} alt="certs"  className="img-responsive" width="45" height="45"/></Link>
                            </div>
                     </div>
                    <div className="col align-self-end" id="cv">
                        <div className="col-12 col-md m-1 md-auto">
                            <Link to="resume" ><img src={Cv} alt="cv's" className="img-responsive"  width="52" height="55" /></Link>
                        </div>
                    </div>
           </div>
        );
    
}
export default Home;

