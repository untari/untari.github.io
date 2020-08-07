import React  from "react";
import ReactModal from "react-modal";
import ReactDOM from 'react-dom';
import {  Card, CardImg, CardText, CardBody,  CardTitle } from 'reactstrap';
import screen from './screen.jpg';

ReactModal.setAppElement('#root');

class Project extends React.Component {
  constructor () {
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
    this.setState({ showModal: true });
  }
  
  handleOpenModal2 () {
    this.setState({ showModal2: true });
  }
  
  handleOpenModal3 () {
    this.setState({ showModal3: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }
  
  handleCloseModal2 () {
    this.setState({ showModal2: false });
  }
  
  handleCloseModal3 () {
    this.setState({ showModal3: false });
  }
  render () {
    
    return (
      <div style={{marginLeft: "13%"}} >
        <button className="btn btn-info mr-2 mt-2 " onClick={this.handleOpenModal}>HTML&CSS</button>
        <button className="btn btn-info mr-2 mt-2" onClick={this.handleOpenModal2}>JavaScript</button>
        <button className="btn btn-info mr-2 mt-2" onClick={this.handleOpenModal3}>React</button>
        <ReactModal 
           isOpen={this.state.showModal}
           contentLabel="Modal #1 Global Style Override Example"
           onRequestClose={this.handleCloseModal}
           className="Modal"
        >

          <div className="container">
             <Card>
                    <div className="col-md-8">
                          <CardImg  src="https://cottagebloomscards.com/wp-content/uploads/2013/12/Golden-Retriever-Puppy.png" alt="Card image" />
                    </div>
                    <div>
                        <CardBody>
                            <CardTitle>Animal Trading Card</CardTitle>
                            <CardText className=" text-dark">This website project is how to create animal trading card using HTML and CSS. <br />
                              To check the code source click on  <a href="https://github.com/untari/animal_trading_card"> here</a>
                            </CardText>
                            <button className="btn btn-secondary"  onClick={this.handleCloseModal}>Close </button>
                        </CardBody>
                    </div>
             </Card>
          </div>
          
         
        </ReactModal>
        <ReactModal 
           isOpen={this.state.showModal2}
           contentLabel="Modal #2 Global Style Override Example"
           onRequestClose={this.handleCloseModal2}
           className="Modal"
        >
            <div className="container">
                <Card>
                        <div className="col-md-8">
                            <CardImg  src="https://i.pinimg.com/600x315/d7/24/e5/d724e532f40de47c400f929bb644a167.jpg" alt="Card image" />
                        </div>
                        <div>
                            <CardBody>
                                <CardTitle>Digital Analog Clock</CardTitle>
                                <CardText className=" text-dark">This website project is about how to create Digital analog clock using HTML,  CSS and JavaScript. 
                                To check the code source click on  <a href="https://github.com/untari/an-analog-clock"> here</a>
                                </CardText>
                                <button  className="btn btn-secondary" onClick={this.handleCloseModal2}>Close</button>
                            </CardBody>
                        </div>
                </Card>
           </div>
         
        </ReactModal>
        <ReactModal 
           backgroundColor={'green'}
           isOpen={this.state.showModal3}
           contentLabel="Modal #3 Global Style Override Example"
           onRequestClose={this.handleCloseModal3}
           className="Modal"
        >
           <div className="container">
                <Card>
                        <div className="col-md-8">
                            <CardImg  src={screen} alt="Card image" />
                        </div>
                        <div>
                            <CardBody>
                                <CardTitle> Personal Website</CardTitle>
                                <CardText className=" text-dark">This website project is about how I  create personal website using create react app.
                                To check the code source click on  <a href="https://github.com/untari/untari-website"> here</a>
                                </CardText>
                                <button className="btn btn-secondary" onClick={this.handleCloseModal3}>Close </button>
                            </CardBody>
                        </div>
                </Card>
           </div>
         
        </ReactModal>
      </div>
    );
  }
}
export default Project;
