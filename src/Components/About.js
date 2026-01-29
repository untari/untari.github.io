import React, { Component } from 'react';
import Tari from '../Images/tari.png';

class About extends Component {
  render() {
    return (
      <div className="about-card">
        <div className="row no-gutters about">
          <div className="col-md-4">
            <img src={Tari} className="card-img" alt="Tari" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h2 className="card-title">Tari</h2>
              <h4 className="card-subtitle">Front-End Developer & Open Source Enthusiast</h4>
              
              <div className="about-section">
                <h5>About Me</h5>
                <p>
                  I am a Computer Science student at University of London. As a front-end developer, I'm passionate 
                  about creating fun, innovative, accessible, and fast websites. I strive to leave every bit of code 
                  I touch more readable, modular, efficient, and accessible than I found it.
                </p>
              </div>

              <div className="about-section">
                <h5>Open Source & Community</h5>
                <p>
                  I'm an open source enthusiast who believes in its power for societal benefit and personal growth. 
                  Through community engagement with organizations like <strong>FOSSASIA</strong> and <strong>AnitaB</strong>, 
                  I've improved my coding skills, learned from experienced developers, and become a better communicator.
                </p>
              </div>

              <div className="about-section">
                <h5>Skills</h5>
                <p>
                  React, JavaScript, HTML/CSS, Front-End Development, Accessibility, Open Source Contribution
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
