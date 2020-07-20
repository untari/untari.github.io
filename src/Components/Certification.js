import React, { useState } from 'react';
import { Button,  Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Certification = (props) => {
  const {
    buttonLabel,
    className
  } = props;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  return (
            <div className="text-left">
            <Button color="info" onClick={toggle}>React</Button>
            <Modal isOpen={modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
                toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>React Learning Path</ModalHeader>
                <ModalBody>
                kjhlhgkg
                </ModalBody>
                <ModalFooter>
                <Button color="secondary" onClick={toggle}>Close</Button>
                </ModalFooter>
            </Modal>
    </div>
  );
}
export default Certification;
