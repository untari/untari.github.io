import React, { Component } from 'react';
import { Container, Button, Link } from 'react-floating-action-button';


class Project extends Component {
	  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
        <div>
            <Container>
                <Link href="#"
                    tooltip="CSS3"
                    icon="fa fa-css3" />
                <Link href="#"
                    tooltip="HTML"
                    icon="fa fa-html5" />

                <Button

                    icon="fa fa-paw"
                    rotate={true}
                    onClick={() => alert('FAB Rocks!')} />
            </Container>
        </div>
      );
	}
}
export default Project;


