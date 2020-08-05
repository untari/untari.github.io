import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Cv from './cv.svg';
import  coursera from './screen.svg';
import certificate from './certs.svg';
import projects from './projects.svg';
import Modal from "react-modal";
import resume from './Resume.pdf';
import { Button } from 'reactstrap';


class Home extends Component {
 
 constructor() {
        super();
        this.state = {
            showModal: false,
            showModal2: false,
  
        };

        
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleOpenModal2 = this.handleOpenModal2.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleCloseModal2 = this.handleCloseModal2.bind(this);

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
    componentDidMount() {
       Modal.setAppElement('#root');
  }
 render() {

       return(
             <div id="div1">
                <div className="col align-self-end "  id="projects">
                        <div className=" col-12 col-md m-1 md-auto " >
                            <Link to="project" 
                               ><img   src={projects}   alt="projects"  className="img-responsive" width="60" height="40"/>
                                 
                           </Link>
                              
                        </div>
                    </div>
                    <div className="col align-self-center" id="certs">
                            <div className=" col-12 col-md m-1 md-auto ">
                                    <img src={certificate} alt="certs" onClick={this.handleOpenModal} className="img-responsive" width="45" height="45"/>
                                     <Modal 
                                            isOpen={this.state.showModal}
                                            contentLabel="Modal #1 Global Style Override Example"
                                            onRequestClose={this.handleCloseModal}
                                             
                                            >
                                             <div className="media">
                                                <img src={coursera} width="20%"className="mr-3" alt="Sample" />
                                                <div className="media-body">
                                                    <h6 className="mt-1">The Hong Kong University of Science and Technology <br /> <small><i>(Coursera)</i></small></h6>
                                                    <p>Front-End Web Development with React</p>
                                                  </div>
                                               </div>
                                            <button className="btn btn-secondary"  onClick={this.handleCloseModal}>Close </button>
                                    </Modal>
                            </div>
                     </div>
                    <div className="col align-self-end" id="cv">
                        <div className="col-12 col-md m-1 md-auto">
                            <img src={Cv} alt="cv's" onClick={this.handleOpenModal2} className="img-responsive"  width="52" height="55" />
                             <Modal 
                                    isOpen={this.state.showModal2}
                                    contentLabel="Modal #2 Global Style Override Example"
                                    onRequestClose={this.handleCloseModal2}
                                    >
                                    <div>
                                           <Button id= "btnDownload" color="info" ><a href={require("./Resume.pdf")} download={resume}>Download File</a></Button>
                                            <Button  className="text-light mx-2 " onClick={this.handleCloseModal2}>Close</Button>
                                         <div>   
                                            <iframe src={resume} style={{width: "500px", height: "400px"}}  title="myFrame"></iframe>
                                          </div>  
                                    </div>
                                    
                            </Modal>
                        </div>
                    </div>
           </div>
        );
    }
}

export default Home;

