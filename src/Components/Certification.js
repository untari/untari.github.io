import React from 'react';
import  coursera from './screen.svg';
import ReactModal from "react-modal";


ReactModal.defaultStyles.overlay.backgroundColor = '#c7ebea';

class Certification extends React.Component {
    constructor() {
        super();
        this.state = {
            showModal: false
        };
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }
    handleOpenModal () {
        this.setState({showModal: true});
    }
    handleCloseModal () {
        this.setState({showModal: false});
    }
    render() {
        return(
            <div>
                   <button className="btn btn-info mr-2 mt-2 " onClick={this.handleOpenModal}>Certs</button>
                   <ReactModal 
                        isOpen={this.state.showModal}
                        contentLabel="Modal #1 Global Style Override Example"
                        onRequestClose={this.handleCloseModal}
                        >
                        <p>HK</p>
                        <button className="btn btn-secondary"  onClick={this.handleCloseModal}>Close </button>
                  </ReactModal>
            </div>
            
        );
    }
}

export default Certification;
