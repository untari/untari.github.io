import React, { Component  } from 'react';
import {  Card, CardText, CardBody, CardLink, CardTitle, CardSubtitle, Button } from 'reactstrap';
import Cv from '../Images/cv.png';
import girl from '../Images/girl.jpg'
import  coursera from '../Images/coursera.jpg';
import  coursera3 from '../Images/coursera3.png';
import  coursera4 from '../Images/coursera4.png';
import  coursera5 from '../Images/coursera5.png';
import  coursera6 from '../Images/coursera6.png';
import  coursera7 from '../Images/coursera7.png';
import  coursera8 from '../Images/coursera8.png';
import certificate from '../Images/certs.png';
import freecodecamp from '../Images/freecodecamp.png';
import projects from '../Images/projects.png';
import resume from './Resume.pdf';
import screen from '../Images/screen.jpg';
import clock from '../Images/clock.png';
import udacity from '../Images/udacity.jpg';
import linkedin2 from '../Images/linkedin2.jpg';
import loginPage from '../Images/loginPage.png';
import gameProject from '../Images/game-project.png';



class Home extends Component {
    render() {
       return(
           <div className="container">
           {/*header pic*/}
            <div className="container text-center" style={{verticalAlign: "middle", marginBottom: "50px"}} id="home">
                <div className="container col-xs-6 col-md-8 col-lg-8" >
                    <img className="masthead-avatar mb-2 img-fluid" src={girl} alt="header"  />
                    <h1 className="masthead-heading text-uppercase mb-0">Front-End Web Developer</h1>
                    <div className="divider-custom divider-light">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fa fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>
                </div>
                            
                            {/*middle menu*/}
                <div className="row" style={{marginBottom: "2rem"}} id="menu">
                    <div className="col-xs-4 col-md-4 col-sm-4 col-lg-4 mb-4 ">
                        <div className="portfolio-item mx-auto"  data-toggle="modal" data-target="#portfolioModal1">
                            <img className="img-fluid" src={projects} alt="projects"  />
                            <div className="overlay"><div className="text">Projects</div></div>
                        </div>
                    </div>
                        
                    <div className="col-xs-3  col-md-4  col-sm-4 col-lg-4 mb-4">
                        <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal2">
                            <img className="img-fluid"  src={certificate} alt="certs"   />
                            <div className="overlay"><div className="text">Certificates</div></div>
                        </div>
                    </div>
                        
                    <div className="col-xs-3 col-md-4 col-sm-4 col-lg-4 mb-4">
                        <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal3">
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
                            <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i className="fa fa-times"></i></span>
                            </button>
                            
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
                               
                                            {/*  // personal project// */}
                                        <Card className="text-dark mt-3">
                                            <CardBody>
                                                <CardTitle className="h3">Game Project</CardTitle>
                                                <CardSubtitle>P5.js</CardSubtitle>
                                            </CardBody>
                                            <a href="https://github.com/untari/Little-guy-jumping-game"><img loading="lazy" width="149" height="149" src="https://github.blog/wp-content/uploads/2008/12/forkme_right_darkblue_121621.png?resize=149%2C149" className="attachment-full size-full" alt="Fork me on GitHub" data-recalc-dims="1" id="github-ribbon"/>
                                            </a>
                                            
                                            <a href="https://untari.com/Little-guy-jumping-game/">
                                                <img src={gameProject} alt="login-page" className="img-fluid"/>
                                            </a>
                                            <CardBody>
                                                <CardText> This game character project is from my final exams in Introduction to Programming I in University of London. To check the source code and the website click on the links bellow.</CardText>
                                                <CardLink href="https://github.com/untari/Little-guy-jumping-game">Source Code</CardLink>
                                                <CardLink href="https://untari.com/Little-guy-jumping-game/">Website</CardLink>
                                            </CardBody>
                                        </Card>
                                        <Card className="text-dark mt-3">
                                            <CardBody>
                                                <CardTitle className="h3">Sign Up Auth Firebase</CardTitle>
                                                <CardSubtitle>Reactjs & Firebase</CardSubtitle>
                                            </CardBody>
                                            <a href="https://github.com/untari/signup-auth-firebse"><img loading="lazy" width="149" height="149" src="https://github.blog/wp-content/uploads/2008/12/forkme_right_darkblue_121621.png?resize=149%2C149" className="attachment-full size-full" alt="Fork me on GitHub" data-recalc-dims="1" id="github-ribbon"/>
                                            </a>
                                            
                                            <a href="https://untari.com/animal_trading_card/">
                                                <img src={loginPage} alt="login-page" className="img-fluid"/>
                                            </a>
                                            <CardBody>
                                                <CardText> This project website is about sign up form using ReactJS for the front-end and using firebase to save user sign up. To check the source code and the website click on the links bellow.</CardText>
                                                <CardLink href="https://github.com/untari/signup-auth-firebse">Source Code</CardLink>
                                                <CardLink href="https://untari.com/signup-auth-firebase/">Website</CardLink>
                                            </CardBody>
                                        </Card>
                                        
                                        {/* //server-side honour project   */}
                                        <Card className="text-dark mt-3">
                                        <CardBody>
                                            <CardTitle className="h3">Login Form</CardTitle>
                                            <CardSubtitle>Express and NodeJS</CardSubtitle>
                                            </CardBody>
                                                <a href="https://github.com/untari/login-system"> 
                                                <img loading="lazy" width="149" height="149" src="https://github.blog/wp-content/uploads/2008/12/forkme_right_darkblue_121621.png?resize=149%2C149" className="attachment-full size-full" alt="Fork me on GitHub" data-recalc-dims="1" id="github-ribbon"/>
                                                </a>
                                                <a href="https://login-form-nodejs.herokuapp.com/">
                                                <img  src={coursera6}  alt="login form"  className="img-fluid"    />
                                                </a>
                                            <CardBody>
                                            <CardText>
                                                This website project is about how to create simple existing login form using Express and NodeJS.
                                                This project deployed in Herokuapp. To run this project, clone the repository and run the server with <strong>npm start</strong>
                                                To check the source code and the website click on links bellow.</CardText>
                                            <CardLink href="https://github.com/untari/login-system">Source Code</CardLink>
                                            <CardLink href="https://login-form-nodejs.herokuapp.com/">Website</CardLink>
                                        </CardBody>
                                    </Card>
                                                
                                        {/* //coursera project  */}
                                    <Card className="text-dark mt-3">
                                        <CardBody>
                                            <CardTitle className="h3">GoSeos</CardTitle>
                                            <CardSubtitle>HTML, CSS & JavaScript</CardSubtitle>
                                        </CardBody>
                                        <a href="https://github.com/untari/goseos"><img loading="lazy" width="149" height="149" src="https://github.blog/wp-content/uploads/2008/12/forkme_right_darkblue_121621.png?resize=149%2C149" className="attachment-full size-full" alt="Fork me on GitHub" data-recalc-dims="1" id="github-ribbon"/>
                                        </a>
                                        <a href="https://untari.com/goseos/">
                                            <img  src={coursera5} alt="Clock" className="img-fluid" />
                                        </a>
                                        <CardBody>
                                            <CardText>This website is about website that sells SEO services using HTML, CSS and Bootsrap 4. <br />
                                            To check the source code and the website click on links bellow. </CardText>
                                            <CardLink href="https://github.com/untari/goseos">Source code</CardLink>
                                            <CardLink href="https://untari.com/goseos/">Website</CardLink>
                                        </CardBody>
                                    </Card>
                                                
                                    <Card className="text-dark mt-3">
                                        <CardBody>
                                            <CardTitle className="h3">Restaurant Confusion</CardTitle>
                                            <CardSubtitle>Reactjs</CardSubtitle>
                                        </CardBody>
                                        <a href="https://github.com/untari/confusion"><img loading="lazy" width="149" height="149" src="https://github.blog/wp-content/uploads/2008/12/forkme_right_darkblue_121621.png?resize=149%2C149" className="attachment-full size-full" alt="Fork me on GitHub" data-recalc-dims="1" id="github-ribbon"/>
                                        </a>
                                        <a href="https://untari.com/home">
                                            <img  src={screen}  alt="restaurant"  className="img-fluid" />
                                        </a>
                                        <CardBody>
                                            <CardText>This website project is about how to create restaurant website using React JS.
                                            To check the  source code click and the website click on the links bellow.</CardText>
                                            <CardLink href="https://github.com/untari/confusion">Source Code</CardLink>
                                            <CardLink href="https://untari.github.io/confusion/">website</CardLink>
                                        </CardBody>
                                    </Card>
                                                 
                                    <Card className="text-dark mt-3">
                                        <CardBody>
                                            <CardTitle className="h3"> Digital Analog Clock </CardTitle>
                                            <CardSubtitle>HTML, CSS & JavaScript</CardSubtitle>
                                        </CardBody>
                                        <a href="https://github.com/untari/an-analog-clock"><img loading="lazy" width="149" height="149" src="https://github.blog/wp-content/uploads/2008/12/forkme_right_darkblue_121621.png?resize=149%2C149" className="attachment-full size-full" alt="Fork me on GitHub" data-recalc-dims="1" id="github-ribbon"/>
                                        </a>
                                        
                                        <a href="https://untari.com/an-analog-clock/">
                                            <img  src={clock} alt="Clock" className="img-fluid" />
                                        </a>
                                        <CardBody>
                                            <CardText>This website project is about how to create Digital analog clock using HTML, CSS and JavaScript. 
                                            To check the source code and the website click on links bellow. </CardText>
                                            <CardLink href="https://github.com/untari/an-analog-clock">Source code</CardLink>
                                            <CardLink href="https://untari.github.io/an-analog-clock/">Website</CardLink>
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
            <div className="portfolio-modal modal fade" id="portfolioModal2" tabIndex="-1" role="dialog" aria-labelledby="portfolioModal2Label" aria-hidden="true">
                <div className="modal-dialog modal-xl" role="document">
                    <div className="modal-content">
                        <button className="close" type="button" data-dismiss="modal" aria-label="Close">
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
                                        <Card className="text-dark mt-3">
                                        <CardBody>
                                            <CardTitle className="h3">FreeCodeCamp</CardTitle>
                                            <CardSubtitle>Freecodecamp</CardSubtitle>
                                        </CardBody>
                                        <a href="https://www.freecodecamp.org/certification/tari/front-end-development-libraries"> <img src={freecodecamp} alt="Freecodecamp"  className="img-fluid" />
                                        </a>
                                        <CardBody>
                                            <CardText><strong>Front End Development Libraries</strong></CardText>
                                            <CardLink href="https://freecodecamp.org/certification/tari/front-end-development-libraries">Validate Certificate</CardLink>
                                                <CardText>
                                                    FreeCodeCamp completion certificates in Front-end Development Libraries. As part of this certification, I built 5 projects and got all automated test suites to pass.  
                                                </CardText>
                                            </CardBody>
                                        </Card>

                                        <Card className="text-dark mt-3">
                                        <CardBody>
                                            <CardTitle className="h3">The Hong Kong University of Science and Technology</CardTitle>
                                            <CardSubtitle>Coursera</CardSubtitle>
                                        </CardBody>
                                        <a href="https://www.coursera.org/account/accomplishments/specialization/MHKB2TGZNRUR"> <img src={coursera8} alt="Coursera"  className="img-fluid" />
                                        </a>
                                        <CardBody>
                                            <CardText><strong>Full-Stack Web Development with React</strong></CardText>
                                            <CardLink href="https://www.coursera.org/account/accomplishments/specialization/MHKB2TGZNRUR">Validate Certificate</CardLink>
                                                <CardText>
                                                    Coursera certifies successful completion of The Hong Kong University of Science and Technology Full-Stack Web Development with React Specialization.
                                                </CardText>
                                            </CardBody>
                                        </Card>

                                                 
                                        <Card className="text-dark mt-3">
                                        <CardBody>
                                            <CardTitle className="h3">The Hong Kong University of Science and Technology</CardTitle>
                                            <CardSubtitle>Coursera</CardSubtitle>
                                        </CardBody>
                                        <a href="https://www.coursera.org/account/accomplishments/verify/EKSYUEPWV7M2"> <img src={coursera7} alt="Coursera"  className="img-fluid" />
                                        </a>
                                        <CardBody>
                                            <CardText><strong>Multiplatform Mobile App Development with React Native</strong></CardText>
                                            <CardLink href="https://www.coursera.org/account/accomplishments/verify/VMZFGHLFZP6M">Validate Certificate</CardLink>
                                                <CardText>
                                                    This course focuses on developing cross-platform, native iOS and Android apps using React Native and the Expo SDK. React Native uses modern JavaScrip and learnt about UI development with React Native UI and layout support and access the native mobile platform's capabilities from Javascript using the Expo SDK.
                                                </CardText>
                                            </CardBody>
                                        </Card>

                                        <Card className="text-dark mt-3">
                                            <CardBody>
                                                <CardTitle className="h3">The Hong Kong University of Science and Technology</CardTitle>
                                                <CardSubtitle>Coursera</CardSubtitle>
                                            </CardBody>
                                            <a href="https://www.coursera.org/account/accomplishments/verify/EKSYUEPWV7M2"> <img src={coursera4} alt="Coursera"  className="img-fluid" />
                                            </a>
                                            <CardBody>
                                                <CardText><strong>Server-side Development with NodeJS, Express and MongoDB</strong></CardText>
                                                <CardLink href="https://www.coursera.org/account/accomplishments/verify/EKSYUEPWV7M2">Validate Certificate</CardLink>
                                                    <CardText>
                                                        The entire course around the NodeJS platform. Started with an overview of the Web protocols: HTTP and HTTPS. 
                                                        I learnt how to examine NodeJS and NodeJS modules (Express for building web servers). 
                                                        On the database side,  I learnt basic CRUD operations, NoSQL databases, in particular MongoDB and Mongoose for accessing MongoDB from NodeJS.
                                                        I learnt to examine the REST concepts and building a RESTful API, authentication and security. 
                                                        Review backend as a service (BaaS) approaches, including mobile BaaS, both open-source and commercial BaaS services.
                                                    </CardText>
                                            </CardBody>
                                        </Card>
                                                 
                                        <Card className="text-dark mt-3">
                                            <CardBody>
                                                <CardTitle className="h3">The Hong Kong University of Science and Technology</CardTitle>
                                                <CardSubtitle>Coursera</CardSubtitle>
                                            </CardBody>
                                            <a href="https://www.coursera.org/account/accomplishments/verify/NJNHSQS846AV"> <img src={coursera3} alt="Coursera"  className="img-fluid" /> 
                                            </a>
                                            <CardBody>
                                                <CardText><strong>Front-End Web UI Frameworks and Tools: Bootstrap 4</strong></CardText>
                                                <CardLink href="https://www.coursera.org/account/accomplishments/verify/NJNHSQS846AV">Validate Certificate</CardLink>
                                                    <CardText>
                                                        This course give an overview of client-side web UI frameworks, in particular Bootstrap 4.
                                                        I learnt about grids and responsive design, Bootstrap CSS and JavaScript components. 
                                                        Learnt about CSS preprocessors, Less and Sass. Also learn the basics of Node.js and NPM and task runners like Grunt and Gulp. In this course, I'm be able to:
                                                        -Set up, design and style a web page using Bootstrap 4 and its components.
                                                        -Create a responsive web page design.
                                                        -Make use of web tools to setup and manage web sites.
                                                    </CardText>
                                            </CardBody>
                                        </Card>
                                                
                                        <Card className="text-dark mt-3">
                                            <CardBody>
                                                <CardTitle className="h3">The Hong Kong University of Science and Technology</CardTitle>
                                                <CardSubtitle>Coursera</CardSubtitle>
                                            </CardBody>
                                            <a href="https://www.coursera.org/account/accomplishments/verify/BKU2AYMC57EN"><img src={coursera} alt="Coursera"  className="img-fluid" /> 
                                            </a>
                                            <CardBody>
                                                <CardText><strong>Front-End Web Development with React with Honours</strong></CardText>
                                                <CardLink href="https://www.coursera.org/account/accomplishments/verify/BKU2AYMC57EN">Validate Certificate</CardLink>
                                                    <CardText>  
                                                        This course explores Javascript based front-end application development,<br /> and in particular the React library (Currently Ver. 16.3),
                                                        JavaScript ES6 for developing React application.
                                                        Introduction to the use of Reactstrap for Bootstrap 4-based responsive UI design.
                                                        Introduced to various aspects of React components. 
                                                        Learn about React router and its use in developing single-page applications. 
                                                        Learn about designing controlled forms. 
                                                        Introduced to the Flux architecture and Redux various aspects of Redux and use it to develop React-Redux powered applications. 
                                                        Learn to use Fetch for client-server communication and the use of REST API on the server side. 
                                                    </CardText>
                                            </CardBody>
                                        </Card>
                                               
                                        <Card className="text-dark mt-3">
                                            <CardBody>
                                                <CardTitle>Udacity</CardTitle>
                                            </CardBody>
                                            <a href="https://confirm.udacity.com/JNT26JSH"> <img  src={udacity} alt="udacity"  className="img-fluid"  /> 
                                            </a>
                                            <CardBody>
                                                <CardText><strong>Programming Languages Introduction</strong></CardText>
                                                    <CardLink href="https://confirm.udacity.com/JNT26JSH">Validate Certificate</CardLink>
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
                                                <CardLink href="https://www.linkedin.com/learning/paths/become-a-front-end-web-developer">Validate Certificate</CardLink>
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
            <div className="portfolio-modal modal fade" id="portfolioModal3" tabIndex="-1" role="dialog" aria-labelledby="portfolioModal3Label" aria-hidden="true">
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
                                        <Card>
                                            <object data={resume}   title="myFrame" style={{width: "100%", height: "50rem"}}></object>
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
