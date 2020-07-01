import React from 'react';
import { Container, Link, Button } from 'react-floating-action-button'

const Project = () => {
    return(
       <div className="container">
          <Container>
            <Link href="#"
                tooltip="React"
                icon="far fa-sticky-note" />
            <Link href="#"
                tooltip="Bootstrap"
                icon="fas fa-user-plus"
                className="fab-item btn btn-link btn-lg text-white" />
            <Button
                tooltip="JavaScript"
                icon="fas fa-plus"
                rotate={true}
                onClick={() => <img src="https://www.flaticon.com/premium-icon/icons/svg/2786/2786993.svg" alt="project" heigth="5%" width="4.5%" className="project" /> } />
          </Container>
       </div>
    );
  }
export default Project;
