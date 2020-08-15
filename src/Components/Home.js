import React, { Component  } from 'react';
import { Media } from 'reactstrap';
import Cv from './cv.svg';
import  coursera from './coursera.jpg';
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
                                    <img  src={projects} onClick={this.handleOpenModal3}  alt="projects"  className="img-responsive" width="60" height="40"/>
                                 <ReactModal 
                                                isOpen={this.state.showModal3}
                                                contentLabel="Modal #3 Global Style Override Example"
                                                onRequestClose={this.handleCloseModal3}
                                                className="Modal">
                                             <div >
                                                <Media id="btn">
                                                   <button className="btn btn-secondary" style={{marginLeft: "25%", position: "fixed"}} onClick={this.handleCloseModal3}>X</button>
                                                </Media>
                                                <Media className="screen text-center  mr-3 mt-3 ">
                                                     <a href="https://github.com/untari?tab=repositories"><img loading="lazy" width="149" height="149" src="https://github.blog/wp-content/uploads/2008/12/forkme_left_gray_6d6d6d.png?resize=149%2C149" className="attachment-full size-full" alt="Fork me on GitHub" data-recalc-dims="1" /></a>
                                                    <Media left top href="https://untari.github.io/animal_trading_card/">
                                                    <Media object src={dog} style={{width:"30%", height:"30%", marginLeft: "33%", marginTop: "20px"}} alt="Generic placeholder image" />
                                                    </Media>
                                                    <Media body>
                                                    <Media heading>
                                                        HTML&CSS <small>(Animal Trading Card)</small>
                                                    </Media>
                                                       This project website is about Animat Trading Card using HTML and CSS.
                                                       To check the source code click <a href="https://github.com/untari/animal_trading_card"> here</a> 
                                                    </Media>
                                                </Media>
                                                <Media className="screen  text-center mr-3 mt-3 " >
                                                    <Media  pull-left href="https://untari.github.io/an-analog-clock/">
                                                       <Media object src={clock} style={{width:"30%",  height:"20%", marginLeft: "35%"}}  alt="Generic placeholder image" />
                                                    </Media>
                                                    <Media body>
                                                    <Media heading>
                                                        HTML, CSS & JavaScript <small>(Digital Analog Clock)</small>
                                                    </Media>
                                                       This website project is about how to create Digital analog clock using HTML,  CSS and JavaScript. 
                                                        To check the code source click on <a href="https://github.com/untari/an-analog-clock"> here </a>
                                                    </Media>
                                                </Media>
                                                <Media className=" screen text-center " >
                                                    <Media  left top href="https://untari.github.io/confusion/">
                                                    <Media object src={screen} style={{width:"30%", marginTop: "5%", height:"30%", marginLeft: "33%"}} alt="Generic placeholder image" />
                                                    </Media>
                                                    <Media body>
                                                    <Media heading>
                                                        Restaurant Website<small>(React)</small>
                                                    </Media>
                                                        This website project is about how to create restaurant website using React JS.
                                                        To check the code source click on <a href="https://github.com/untari/confusion"> here </a>
                                                    </Media>
                                                </Media>
                                            </div>
                                         </ReactModal>
                                    </div>
                            </div>
                            <div className="col align-self-center" id="certs">
                                    <div className=" col-12 col-md m-1 md-auto ">
                                            <img src={certificate} alt="certs" onClick={this.handleOpenModal} className="img-responsive" width="45" height="45"/>
                                         <ReactModal 
                                                    isOpen={this.state.showModal}
                                                    contentLabel="Modal #1 Global Style Override Example"
                                                    onRequestClose={this.handleCloseModal}
                                                    className="Modal"
                                                    >
                                                    <Media className="screen text-center ">
                                                       <Media id="btn">
                                                         <button className="btn btn-secondary" style={{marginLeft: "25%", position: "fixed"}}  onClick={this.handleCloseModal}>X</button>
                                                        </Media> 
                                                        <Media left top>
                                                            <Media object src={coursera} style={{width: "38%", marginLeft: "32%", marginTop: "15px"}} className="mr-3" alt="Sample" alt="Generic placeholder image" />
                                                        </Media>
                                                        <Media body>
                                                            <Media heading>
                                                                The Hong Kong University of Science and Technology <br /> <small><i>(Coursera)</i></small>
                                                            </Media>
                                                              Front-End Web Development with React
                                                        </Media>
                                                    </Media>
                                                    <Media className="screen text-center">
                                                        <Media left top>
                                                            <Media object src={udacity} style={{width: "38%", marginTop: "5%",marginLeft: "32%"}} className="mr-3" alt="Sample" alt="Generic placeholder image" />
                                                        </Media>
                                                        <Media body>
                                                            <Media heading>
                                                                Udacity
                                                            </Media>
                                                              Programming Languages Introduction
                                                        </Media>
                                                    </Media>
                                                    <Media className="screen text-center">
                                                        <Media left top >
                                                                <Media object src={linkedin} style={{width: "38%", marginLeft: "32%", marginTop: "5%"}} className="mr-3" alt="Sample" alt="Generic placeholder image" />
                                                        </Media>
                                                        <Media body>
                                                            <Media heading>
                                                                LinkedIn Learning
                                                        </Media>
                                                                React Learning Path
                                                        </Media>
                                                </Media>
                                                 <Media className="screen text-center">
                                                        <Media left top>
                                                                <Media object src={linkedin2} style={{width: "38%", marginLeft: "32%", marginTop: "5%"}} className="mr-3" alt="Sample" alt="Generic placeholder image" />
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
                                   
                                      <img src={Cv} alt="cv's" onClick={this.handleOpenModal2} className="img-responsive"  width="52" height="55" />
                                 
                                    <ReactModal 
                                            isOpen={this.state.showModal2}
                                            contentLabel="Modal #2 Global Style Override Example"
                                            onRequestClose={this.handleCloseModal2}
                                            className="Modal"
                                            >
                                            <div>
                                                <Media className="screen text-center" >
                                                    <Media  style={{marginLeft: "238px", position: "fixed"}} id="btn">
                                                        <Button id= "btnDownload" color="info" ><a href={require("./Resume.pdf")} download={resume}>D</a></Button>
                                                        <Button  className="mx-1 "   onClick={this.handleCloseModal2}>X</Button>
                                                    </Media>
                                                    <Media >
                                                       <iframe src={resume}  title="myFrame" style={{width: "900px", height: "370px", marginTop: "10%", marginLeft: "-2%"}} id="pdf"></iframe> 
                                                    </Media>
                                                    <Media body>
                                                       
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


