import React, { Component  } from 'react';
import { Media } from 'reactstrap';
import Cv from './cv.svg';
import  coursera from './screen.svg';
import certificate from './certs.svg';
import projects from './projects.svg';
import ReactModal from "react-modal";
import resume from './Resume.pdf';
import { Button } from 'reactstrap';
import screen from './screen.jpg';
import dog from './dog.jpg';
import clock from './clock.png';
import udacity from './udacity.jpg';
import linkedin from './linkedin.jpg';
import linkedin2 from './linkedin2.jpg';
import {Animated} from "react-animated-css";


ReactModal.setAppElement('#root');
class Home extends Component {
 
 constructor() {
        super();
        this.state = {
            showModal: false,
            showModal2: false,
            showModal3: false
        };

        
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleOpenModal2 = this.handleOpenModal2.bind(this);
        this.handleOpenModal3= this.handleOpenModal3.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
       this.handleCloseModal2 = this.handleCloseModal2.bind(this);
       this.handleCloseModal3= this.handleCloseModal3.bind(this);

    }
 
    handleOpenModal () {
        this.setState({showModal: true});
    }
    handleCloseModal () {
        this.setState({showModal: false});
    }
    handleOpenModal2 () {
       this.setState({ showModal2: true });
   }
   handleCloseModal2 () {
        this.setState({showModal2: false});
  }
  handleOpenModal3 () {
    this.setState({ showModal3: true });
  }
  handleCloseModal3 () {
    this.setState({ showModal3: false });
  }
 
 render() {
       return(
            <div id="div1">
                    <div className="col align-self-end "  id="projects">
                            <div className=" col-12 col-md m-1 md-auto " >
                                <Animated animationIn="bounceInRight" animationOut="bounceInRight" animationInDuration={2000} animationOutDuration={2000} isVisible={true}>
                                    <img  src={projects} onClick={this.handleOpenModal3}  alt="projects"  className="img-responsive" width="60" height="40"/>
                                </Animated>
                                 <ReactModal 
                                                isOpen={this.state.showModal3}
                                                contentLabel="Modal #3 Global Style Override Example"
                                                onRequestClose={this.handleCloseModal3}
                                                className="Modal">
                                             <div >
                                                <Media id="btn2">
                                                   <button className="btn btn-secondary"  style={{marginLeft: "96%"}} onClick={this.handleCloseModal3}>X</button>
                                                </Media>
                                                <Media className="screen text-center  mr-3 mt-3 ">
                                                    <Media left top href="#">
                                                    <Media object src={dog} style={{width:"30%", height:"30%", marginLeft: "33%"}} alt="Generic placeholder image" />
                                                    </Media>
                                                    <Media body>
                                                    <Media heading>
                                                        HTML&CSS <small>(Animal Trading Card)</small>
                                                    </Media>
                                                       This project website is about Animat Trading Card using HTML and CSS.
                                                       To check the website click on <a href="https://untari.github.io/animal_trading_card/"> here</a>
                                                    </Media>
                                                </Media>
                                                <Media className="screen  text-center mr-3 mt-3 ">
                                                    <Media  pull-left href="#">
                                                       <Media object src={clock} style={{width:"30%", height:"20%", marginLeft: "35%"}}  alt="Generic placeholder image" />
                                                    </Media>
                                                    <Media body>
                                                    <Media heading>
                                                        HTML, CSS & JavaScript <small>(Digital Analog Clock)</small>
                                                    </Media>
                                                       This website project is about how to create Digital analog clock using HTML,  CSS and JavaScript. 
                                                        To check the code source click on  <a href="https://untari.github.io/an-analog-clock/"> here</a>
                                                    </Media>
                                                </Media>
                                                <Media className=" screen text-center ">
                                                    <Media  left top href="#">
                                                    <Media object src={screen} style={{width:"30%", height:"30%", marginLeft: "33%"}} alt="Generic placeholder image" />
                                                    </Media>
                                                    <Media body>
                                                    <Media heading>
                                                        Restaurant Website<small>(React)</small>
                                                    </Media>
                                                        This website project is about how to create restaurant website using React JS.
                                                        To check the website click on  <a href="https://untari.github.io/home"> here</a>
                                                    </Media>
                                                </Media>
                                            </div>
                                         </ReactModal>
                                    </div>
                            </div>
                            <div className="col align-self-center" id="certs">
                                    <div className=" col-12 col-md m-1 md-auto ">
                                        <Animated animationIn="rotateIn" animationOut="rotateOut" animationInDuration={2000} animationOutDuration={2000} isVisible={true}>
                                            <img src={certificate} alt="certs" onClick={this.handleOpenModal} className="img-responsive" width="45" height="45"/>
                                         </Animated>
                                         <ReactModal 
                                                    isOpen={this.state.showModal}
                                                    contentLabel="Modal #1 Global Style Override Example"
                                                    onRequestClose={this.handleCloseModal}
                                                    className="Modal"
                                                    >
                                                    <Media className="screen text-center ">
                                                       <Media id="btn2">
                                                         <button className="btn btn-secondary" style={{marginLeft: "95%"}}  onClick={this.handleCloseModal}>X</button>
                                                        </Media> 
                                                        <Media left top href="#">
                                                            <Media object src={coursera} style={{width: "35%", marginLeft: "35%"}} className="mr-3" alt="Sample" alt="Generic placeholder image" />
                                                        </Media>
                                                        <Media body>
                                                            <Media heading>
                                                                The Hong Kong University of Science and Technology <br /> <small><i>(Coursera)</i></small>
                                                            </Media>
                                                              Front-End Web Development with React
                                                        </Media>
                                                    </Media>
                                                    <Media className="screen text-center">
                                                        <Media left top href="#">
                                                            <Media object src={udacity} style={{width: "35%", marginLeft: "35%"}} className="mr-3" alt="Sample" alt="Generic placeholder image" />
                                                        </Media>
                                                        <Media body>
                                                            <Media heading>
                                                                Udacity
                                                            </Media>
                                                              Programming Languages Introduction
                                                        </Media>
                                                    </Media>
                                                    <Media className="screen text-center">
                                                        <Media left top href="#">
                                                                <Media object src={linkedin} style={{width: "38%", marginLeft: "33%"}} className="mr-3" alt="Sample" alt="Generic placeholder image" />
                                                        </Media>
                                                        <Media body>
                                                            <Media heading>
                                                                LinkedIn Learning
                                                        </Media>
                                                                React Learning Path
                                                        </Media>
                                                </Media>
                                                 <Media className="screen text-center">
                                                        <Media left top href="#">
                                                                <Media object src={linkedin2} style={{width: "38%", marginLeft: "33%"}} className="mr-3" alt="Sample" alt="Generic placeholder image" />
                                                        </Media>
                                                        <Media body>
                                                            <Media heading>
                                                                LinkedIn Learning
                                                        </Media>
                                                                Front-End Web Developer Learning Path
                                                        </Media>
                                                </Media>
                                        </ReactModal>
                                    </div>
                            </div>
                            <div className="col align-self-end" id="cv">
                                <div className="col-12 col-md m-1 md-auto">
                                   <Animated animationIn="bounceInLeft" animationOut="bounceOutLeft" animationInDuration={2000} animationOutDuration={2000} isVisible={true}>
                                      <img src={Cv} alt="cv's" onClick={this.handleOpenModal2} className="img-responsive"  width="52" height="55" />
                                    </Animated>
                                    <ReactModal 
                                            isOpen={this.state.showModal2}
                                            contentLabel="Modal #2 Global Style Override Example"
                                            onRequestClose={this.handleCloseModal2}
                                            className="Modal"
                                            >
                                            <div>
                                                <Media className="screen text-center">
                                                    <Media id="mediaBtn">
                                                        <Button id= "btnDownload" color="info" style={{marginLeft: "90%", marginTop: "-1px"}}><a href={require("./Resume.pdf")} download={resume}>D</a></Button>
                                                        <Button  className="mx-2 "   onClick={this.handleCloseModal2}>X</Button>
                                                    </Media>
                                                    <Media  id="pdf">
                                                       <iframe src={resume} style={{width: "550", height: "400px", marginLeft: "30%"}}   title="myFrame"></iframe> 
                                                    </Media>
                                                    <Media body>
                                                       Click the <em>D</em> button to download my resume!
                                                    </Media>
                                                </Media>
                                            </div>
                                    </ReactModal>
                                </div>
                            </div>
            </div>
            
        );
    }
}

export default Home;

