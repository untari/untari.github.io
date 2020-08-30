import React, { Component  } from 'react';
import {  Card, CardText, CardBody, CardLink, CardTitle, CardSubtitle, Button } from 'reactstrap';
import Cv from './cv.png';
import girl from './girl.jpg'
import  coursera from './coursera.jpg';
import certificate from './certs.png';
import projects from './projects.png';
import resume from './Resume.pdf';
import screen from './screen.jpg';
import dog from './dog.jpg';
import clock from './clock.png';
import udacity from './udacity.jpg';
import linkedin2 from './linkedin2.jpg';

class Home extends Component {

 render() {
       return(
           <>
                {/*header pic*/}
                <div className="text-center" style={{verticalAlign: "middle", marginBottom: "50px"}} id="home">
                        <div className="container col-xs-6 col-sm-6 col-lg-8" >
                                <img className="masthead-avatar mb-2 img-fluid" src={girl} alt="header"  />
                                <h1 className="masthead-heading text-uppercase mb-0">Front-End Web Developer</h1>
                                <div className="divider-custom divider-light">
                                    <div className="divider-custom-line"></div>
                                    <div className="divider-custom-icon"><i className="fa fa-star"></i></div>
                                    <div className="divider-custom-line"></div>
                                </div>
                            </div>
                            
                              {/*middle menu*/}
                            <div className="row" style={{marginBottom: "2rem"}}>
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
                
                  {/*modal menu for  project */}
               <div className="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-labelledby="portfolioModal1Label" aria-hidden="true">
                        <div className="modal-dialog modal-xl" role="document">
                            <div className="modal-content">
                            <a href="https://github.com/untari?tab=repositories"><img loading="lazy" src="https://github.blog/wp-content/uploads/2008/12/forkme_left_darkblue_121621.png?resize=149%2C149" className="attachment-full size-full" alt="Fork me on GitHub" data-recalc-dims="1"/></a>
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
                                                
                                                 {/*modal menu contents for project */}
                                                <Card className="text-dark">
                                                        <CardBody>
                                                            <CardTitle className="h3">HTML, CSS & JavaScript </CardTitle>
                                                            <CardSubtitle>Digital Analog Clock</CardSubtitle>
                                                        </CardBody>
                                                        <img  src={clock} alt="Clock" className="img-fluid" />
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
                                                        <img  src={dog} alt="dogCard"  className="img-fluid" />
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
                                                    <img  src={screen}  alt="restaurant"  className="img-fluid" />
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
                     {/*modal menu for certificate */}
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
                                                
                                                 {/*modal content for certificate*/}
                                                <Card className="text-dark mt-3">
                                                    <CardBody>
                                                        <CardTitle className="h3">The Hong Kong University of Science and Technology</CardTitle>
                                                        <CardSubtitle>Coursera</CardSubtitle>
                                                    </CardBody>
                                                    <img src={coursera} alt="Coursera"  className="img-fluid" />
                                                    <CardBody>
                                                        <CardText><strong>Front-End Web Development with React</strong></CardText>
                                                            <CardText>  This course explores Javascript based front-end application development,<br /> and in particular the React library (Currently Ver. 16.3),
                                                                    JavaScript ES6 for developing React application.
                                                                    Introduction to the use of Reactstrap for Bootstrap 4-based responsive UI design.
                                                                    Introduced to various aspects of React components. 
                                                                    Learn about React router and its use in developing single-page applications. 
                                                                    Learn about designing controlled forms. 
                                                                    Introduced to the Flux architecture and Redux various aspects of Redux and use it to develop React-Redux powered applications. 
                                                                    Learn to use Fetch for client-server communication and the use of REST API on the server side. </CardText>
                                                    </CardBody>
                                                </Card>
                                                <Card className="text-dark mt-3">
                                                    <CardBody>
                                                        <CardTitle>Udacity</CardTitle>
                                                    </CardBody>
                                                    <img  src={udacity} alt="udacity"  className="img-fluid"  />
                                                    <CardBody>
                                                        <CardText><strong>Programming Languages Introduction</strong></CardText>
                                                        <CardText> Introduction to the fundamentals of programming languages.
                                                                    HTML: Web development in HTML including document structure, tags, syntax, inline and block elements. 
                                                                    CSS: Combine CSS and HTML for visual styling using browser devtools, CSS divs, spans, classes and semantic tags. 
                                                                    Built a project that links HTML and CSS using semantically organized classes.
                                                                    Python: Create object oriented Python programs using classes and functions, Command Line Interface (CLI) inputs, string manipulations, and version control. 
                                                                    JavaScript: Create websites using Document Object Model (DOM), ES6 Syntax, browser events ,JQuery in functions, arrays, and objects. 
                                                                    Created an intuitive and responsive web application that allows the user to create and edit their design pixel by pixel with different sizes and colors.
                                                        </CardText>
                                                    </CardBody>
                                                </Card>
                                                <Card className="text-dark mt-3">
                                                    <CardBody>
                                                        <CardTitle className="h3">  LinkedIn Learning</CardTitle>
                                                        <CardSubtitle>React Learning Path</CardSubtitle>
                                                    </CardBody>
                                                    <img src={linkedin2} alt="linkedin"  className="img-fluid"  />
                                                    <CardBody>
                                                        <CardText><strong>Front-End Web Developer Learning Path</strong></CardText>
                                                        <CardText>
                                                                Web Development: Core responsibilities of front-end vs back-end developers.
                                                                Web Design: UX design principles, structure content, use graphics, integration of Video, audio, and other media
                                                            Front-end Development: Python, HTML5 semantic markup, style text and layouts with Flexbox and Grid, fluid layouts with CSS,
                                                            JavaScript principles: variables, data types, conditionals, functions, loops, closures, and DOM.
                                                            Bootstrap 4 and SASS : Bootstrap responsive layout, SassScript to create complex functions from Sass lists and control statements.
                                                            Github & Git: GitHub web, git: branching, commits, and pull requests, create a local project and move it to GitHub.
                                                            React.js: Operate Components, elements, and state, leverage JSX syntax extension, render components from a list, generate an optimized production build with create-react-app.
                                                        </CardText>
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
                    
                     {/*modal menu for resume*/}
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
                                                
                                                 {/*modal resume content*/}
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
           </>
       );
   }
}

export default Home;

