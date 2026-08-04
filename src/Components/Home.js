import React, { Component  } from 'react';
import {  Card, CardBody, Button } from 'reactstrap';
import Cv from '../Images/cv.png';
import girl from '../Images/girl.jpg'
import certificateIcon from '../Images/certs.png';
import projectsIcon from '../Images/projects.png';
import resume from './Resume.pdf';
import ProjectCard from './ProjectCard';
import CertificateCard from './CertificateCard';
import projects from './data/projects';
import certificates from './data/certificates';



class Home extends Component {
    render() {
       return(
           <div className="container">
           {/*header pic*/}
            <div className="container text-center" style={{verticalAlign: "middle", marginBottom: "50px"}} id="home">
                <div className="container col-6 col-md-8 col-lg-8" >
                    <img className="masthead-avatar mb-2 img-fluid" src={girl} alt="header"  />
                    <h1 className="masthead-heading text-uppercase mb-0"> AI & Software Engineer </h1>
                    <div className="divider-custom divider-light">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fa fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>
                </div>
                            
                            {/*middle menu*/}
                <div className="row" style={{marginBottom: "2rem"}} id="menu">
                    <div className="col-4 col-md-4 col-sm-4 col-lg-4 mb-4 ">
                        <div className="portfolio-item mx-auto"  data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                            <img className="img-fluid" src={projectsIcon} alt="projects"  />
                            <div className="overlay"><div className="text">Projects</div></div>
                        </div>
                    </div>

                    <div className="col-4  col-md-4  col-sm-4 col-lg-4 mb-4">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal2">
                            <img className="img-fluid"  src={certificateIcon} alt="certs"   />
                            <div className="overlay"><div className="text">Certificates</div></div>
                        </div>
                    </div>

                    <div className="col-4 col-md-4 col-sm-4 col-lg-4 mb-4">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal3">
                            <img className="img-fluid" src={Cv} alt="cv's" />
                            <div className="overlay"><div className="text">Resume</div></div>
                        </div>
                    </div>
                    </div>
                </div>
                
                {/*modal menu for  project */}
                <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex="-1" role="dialog" aria-labelledby="portfolioModal1Label" aria-hidden="true">
                    <div className="modal-dialog modal-xl" role="document">
                        <div className="modal-content">
                            <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                            
                    <div className="modal-body text-center">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0" id="portfolioModal1Label">Projects</h2>
                                    <div className="divider-custom">
                                        <div className="divider-custom-line"></div>
                                        <div className="divider-custom-icon"><i className="fa fa-star"></i></div>
                                        <div className="divider-custom-line"></div>
                                    </div>
                                                
                                    {/*modal menu contents for project */}
                                    {projects.map((project) => (
                                        <ProjectCard key={project.title} project={project} />
                                    ))}
                                    <button className="active mt-3"  id="nav2" data-bs-dismiss="modal">
                                        <i className="fa fa-times fa-fw"></i>
                                        Close
                                    </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                    
                {/*modal menu for certificate */}
            <div className="portfolio-modal modal fade" id="portfolioModal2" tabIndex="-1" role="dialog" aria-labelledby="portfolioModal2Label" aria-hidden="true">
                <div className="modal-dialog modal-xl" role="document">
                    <div className="modal-content">
                        <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"><i className="fa fa-times"></i></span>
                        </button>
                        <div className="modal-body text-center">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0" id="portfolioModal2Label">Certificates</h2>
                                        <div className="divider-custom">
                                            <div className="divider-custom-line"></div>
                                            <div className="divider-custom-icon"><i className="fa fa-star"></i></div>
                                            <div className="divider-custom-line"></div>
                                        </div>
                                                
                                        {/*modal content for certificate*/}
                                        {certificates.map((cert) => (
                                            <CertificateCard key={cert.title + cert.heading} certificate={cert} />
                                        ))}
                                        <button className="active mt-3"  id="nav2" data-bs-dismiss="modal">
                                            <i className="fa fa-times fa-fw"></i>
                                            Close
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                    
                {/*modal menu for resume*/}
            <div className="portfolio-modal modal fade" id="portfolioModal3" tabIndex="-1" role="dialog" aria-labelledby="portfolioModal3Label" aria-hidden="true">
                <div className="modal-dialog modal-xl" role="document">
                    <div className="modal-content">
                        <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"><i className="fa fa-times"></i></span>
                        </button>
                        <div className="modal-body text-center">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">                        
                                        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0" id="portfolioModal3Label">Resume</h2>                             
                                        <div className="divider-custom">
                                            <div className="divider-custom-line"></div>
                                            <div className="divider-custom-icon"><i className="fa fa-star"></i></div>
                                            <div className="divider-custom-line"></div>
                                        </div>
                                                
                                            {/*modal resume content*/}
                                        <Card>
                                            <object data={resume}   title="myFrame" style={{width: "100%", height: "50rem"}}></object>
                                            <CardBody>
                                            <Button color="info" ><a href={require("./Resume.pdf")} download={resume} className="text-light">Download</a></Button>
                                            </CardBody>
                                        </Card>
                                        <button className="active mt-3" id="nav2" data-bs-dismiss="modal">
                                            <i className="fa fa-times fa-fw"></i>
                                            Close
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
           </div>
       );
   }
}

export default Home;
