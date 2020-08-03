import React  from "react";
import ReactModal from "react-modal";


ReactModal.defaultStyles.overlay.backgroundColor = '#c7ebea';

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
      <div style={{marginLeft: "13%"}}>
        <button className="btn btn-info mr-2 mt-2 " onClick={this.handleOpenModal}>HTML&CSS</button>
        <button className="btn btn-info mr-2 mt-2" onClick={this.handleOpenModal2}>JavaScript</button>
        <button className="btn btn-info mr-2 mt-2" onClick={this.handleOpenModal3}>React</button>
        <ReactModal 
           isOpen={this.state.showModal}
           contentLabel="Modal #1 Global Style Override Example"
           onRequestClose={this.handleCloseModal}
        >
          <p>HTML&CSS</p>
          <button className="btn btn-secondary"  onClick={this.handleCloseModal}>Close </button>
        </ReactModal>
        <ReactModal 
           isOpen={this.state.showModal2}
           contentLabel="Modal #2 Global Style Override Example"
           onRequestClose={this.handleCloseModal2}
        >
          <p>JavaScript</p>
          <button  className="btn btn-secondary" onClick={this.handleCloseModal2}>Close</button>
        </ReactModal>
        <ReactModal 
           isOpen={this.state.showModal3}
           contentLabel="Modal #3 Global Style Override Example"
           onRequestClose={this.handleCloseModal3}
        >
          <p>React</p>
          <button className="btn btn-secondary" onClick={this.handleCloseModal3}>Close </button>
        </ReactModal>
      </div>
    );
  }
}


export default Project;
