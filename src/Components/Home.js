import React, { Component  } from 'react';
import {  Card, CardText, CardBody, CardLink, CardTitle, CardSubtitle, Button, CardImg } from 'reactstrap';
import Cv from './cv.svg';
import girl from './girl.jpg'
import  coursera from './coursera.jpg';
import certificate from './certs.svg';
import projects from './projects.svg';
import resume from './Resume.pdf';
import screen from './screen.jpg';
import dog from './dog.jpg';
import clock from './clock.png';
import udacity from './udacity.jpg';
import linkedin2 from './linkedin2.jpg';
import { Container, Row, Col } from 'reactstrap';

class Home extends Component {

 render() {
       return(
           <div className="text-center" style={{verticalAlign: "middle", marginBottom: "50px"}}>
                   <div className="container col-xs-6 col-sm-6 col-lg-8" >
                        <img className="masthead-avatar mb-5 img-fluid" src={girl} alt="header" style={{ marginTop: "30%"}} />
                        <h1 className="masthead-heading text-uppercase mb-0">Front-End Web Developer</h1>
                        <div className="divider-custom divider-light">
                            <div className="divider-custom-line"></div>
                            <div className="divider-custom-icon"><i className="fa fa-star"></i></div>
                            <div className="divider-custom-line"></div>
                        </div>
                    </div>
                    <div>
                         <div className="container" style={{maxWidth: "100%", marginBottom: "10px"}}>
                            <div className="row">
                          
                                <div className="col-xs-6 col-sm-4 col-lg-4 mb-4">
                                    <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
                                        <img className="img-fluid" src={projects} alt="projects"  />
                                        <div className="overlay"><div className="text">projects</div></div>
                                    </div>
                                </div>
                   
                                <div className="col-xs-6 col-sm-4 col-lg-4 mb-4">
                                    <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal2">
                                      <img className="img-fluid"  src={certificate} alt="certs"   />
                                    <div className="overlay"><div className="text">certificate</div></div>
                                    </div>
                                </div>
                  
                                <div className="col-xs-6 col-sm-4 col-lg-4 mb-4">
                                    <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal3">
                                          <img className="img-fluid" src={Cv} alt="cv's" />
                                        <div className="overlay"><div className="text">resume</div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                     <div className="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-labelledby="portfolioModal1Label" aria-hidden="true">
                            <div className="modal-dialog modal-xl" role="document">
                                <div className="modal-content">
                                <a href="https://github.com/you"><img loading="lazy" src="https://github.blog/wp-content/uploads/2008/12/forkme_left_darkblue_121621.png?resize=149%2C149" class="attachment-full size-full" alt="Fork me on GitHub" data-recalc-dims="1"/></a>
                                    <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true"><i className="fa fa-times"></i></span>
                                    </button>
                                    
                                    <div className="modal-body text-center" style={{marginTop: "-10rem"}}>
                                        <div className="container">
                                            <div className="row justify-content-center">
                                                <div className="col-lg-8">
                                                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0" id="portfolioModal1Label">Projects</h2>
                                                    <div className="divider-custom">
                                                        <div className="divider-custom-line"></div>
                                                        <div className="divider-custom-icon"><i className="fa fa-star"></i></div>
                                                        <div className="divider-custom-line"></div>
                                                    </div>
                                                
                                                    <Card className="text-dark">
                                                            <CardBody>
                                                                <CardTitle className="h3">HTML, CSS & JavaScript </CardTitle>
                                                                <CardSubtitle>Digital Analog Clock</CardSubtitle>
                                                            </CardBody>
                                                            <img width="50%" src={clock} alt="Clock" className="img-fluid" />
                                                            <CardBody>
                                                                <CardText>This website project is about how to create Digital analog clock using HTML,  CSS and JavaScript. 
                                                                To check the code source and the website click on link bellow. </CardText>
                                                                <CardLink href="https://github.com/untari/an-analog-clock">Code source</CardLink>
                                                                <CardLink href="https://untari.github.io/an-analog-clock/">Website</CardLink>
                                                            </CardBody>
                                                    </Card>
                                                    <Card className="text-dark mt-3">
                                                            <CardBody>
                                                                <CardTitle className="h3"> HTML&CSS </CardTitle>
                                                                <CardSubtitle>Animal Trading Card</CardSubtitle>
                                                            </CardBody>
                                                            <img width="50%" src={dog} alt="dogCard"  className="img-fluid" />
                                                            <CardBody>
                                                                <CardText> This project website is about Animat Trading Card using HTML and CSS.  To check the source code and the website click on the link bellow.</CardText>
                                                                <CardLink href="https://github.com/untari/animal_trading_card">Code source</CardLink>
                                                                <CardLink href="https://untari.github.io/animal_trading_card/">Website</CardLink>
                                                            </CardBody>
                                                    </Card>
                                                    <Card className="text-dark mt-3">
                                                        <CardBody>
                                                        <CardTitle className="h3">Restaurant Confusion</CardTitle>
                                                        <CardSubtitle>React</CardSubtitle>
                                                        </CardBody>
                                                        <img width="50%" src={screen}  alt="restaurant"  className="img-fluid" />
                                                        <CardBody>
                                                        <CardText>This website project is about how to create restaurant website using React JS.
                                                        To check the code source click and the website click on bellow.</CardText>
                                                        <CardLink href="https://github.com/untari/confusion">Coude source</CardLink>
                                                        <CardLink href="https://untari.github.io/confusion/">website</CardLink>
                                                        </CardBody>
                                                    </Card>
                                                    <button className="active mt-3"  id="nav2" data-dismiss="modal">
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
                        <div className="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" role="dialog" aria-labelledby="portfolioModal2Label" aria-hidden="true">
                            <div className="modal-dialog modal-xl" role="document">
                                <div className="modal-content">
                                    <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true"><i className="fa fa-times"></i></span>
                                    </button>
                                    <div className="modal-body text-center">
                                        <div className="container">
                                            <div className="row justify-content-center">
                                                <div className="col-lg-8">
                                            
                                                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0" id="portfolioModal2Label">Certificate</h2>
                                            
                                                    <div className="divider-custom">
                                                        <div className="divider-custom-line"></div>
                                                        <div className="divider-custom-icon"><i className="fa fa-star"></i></div>
                                                        <div className="divider-custom-line"></div>
                                                    </div>
                                                    <Card className="text-dark mt-3">
                                                        <CardBody>
                                                            <CardTitle className="h3">The Hong Kong University of Science and Technology</CardTitle>
                                                            <CardSubtitle>Coursera</CardSubtitle>
                                                        </CardBody>
                                                        <img width="50%" src={coursera} alt="Coursera"  className="img-fluid" />
                                                        <CardBody>
                                                            <CardText>Front-End Web Development with React</CardText>
                                                        </CardBody>
                                                    </Card>
                                                    <Card className="text-dark mt-3">
                                                        <CardBody>
                                                            <CardTitle>Udacity</CardTitle>
                                                        </CardBody>
                                                        <img width="50%" src={udacity} alt="udacity"  className="img-fluid"  />
                                                        <CardBody>
                                                            <CardText>Programming Languages Introduction</CardText>
                                                        </CardBody>
                                                    </Card>
                                                    <Card className="text-dark mt-3">
                                                        <CardBody>
                                                            <CardTitle className="h3">  LinkedIn Learning</CardTitle>
                                                            <CardSubtitle>React Learning Path</CardSubtitle>
                                                        </CardBody>
                                                        <img width="50%" src={linkedin2} alt="linkedin"  className="img-fluid"  />
                                                        <CardBody>
                                                            <CardText>Front-End Web Developer Learning Path</CardText>
                                                        </CardBody>
                                                    </Card>
                                                    <button className="active mt-3"  id="nav2" data-dismiss="modal">
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
                        <div className="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" role="dialog" aria-labelledby="portfolioModal3Label" aria-hidden="true">
                            <div className="modal-dialog modal-xl" role="document">
                                <div className="modal-content">
                                    <button className="close" type="button" data-dismiss="modal" aria-label="Close">
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
                                                    <Card >
                                                        <iframe src={resume}   title="myFrame" style={{width: "100%", height: "50rem"}}></iframe>
                                                        <CardBody>
                                                        <Button color="info" ><a href={require("./Resume.pdf")} download={resume} className="text-light">Download</a></Button>
                                                        </CardBody>
                                                    </Card>
                                                    <button className="active mt-3" id="nav2" data-dismiss="modal">
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

