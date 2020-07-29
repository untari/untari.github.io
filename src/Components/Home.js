import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Cv from './cv.svg';
import certificate from './certs.svg';
import projects from './projects.svg';


class Home extends Component {

    render() {
       return(
             <div id="div1">
                <div className="col align-self-end "  id="projects">
                        <div className=" col-12 col-md m-1 md-auto " >
                            <Link to="project"><img src={projects} alt="projects"  class="img-responsive" width="60" height="40"/></Link>
                        </div>
                    </div>
                    <div class="col align-self-center" id="certs">
                            <div className=" col-12 col-md m-1 md-auto ">
                                    <Link to="certification"><img src={certificate} alt="certs"  class="img-responsive" width="45" height="45"/></Link>
                            </div>
                     </div>
                    <div class="col align-self-end" id="cv">
                        <div className="col-12 col-md m-1 md-auto">
                            <Link to="resume"><img src={Cv} alt="cv's" class="img-responsive"  width="52" height="55" /></Link>
                        </div>
                    </div>
           </div>
        );
    }
}
export default Home;

