import React, { Component } from 'react';
import Tari from '../Images/tari.png';


class About extends Component {
  render() {
    return (
        <div className="card" >
            <div className="row no-gutters about">
                <div className="col-md-4">
                    <img src={Tari} className="card-img" alt="card-img" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Tari, it's my name!</h5>
                        <p className="card-text" >I am a student in Computer Science at University of London. I am also a front-end developer that likes to
                        create fun, innovative, accessible and fast websites. I try to leave every bit of code I touch more adable, modular, efficient and accessible than I found it. <br />I am also an open source enthusiast, since I believe it has multiple benefits for society, including
                        myself, since I can learn and evolve with it. I like taking part in open source communities as it
                        helps me learn from others, improve my coding skills and make me a better communicator. So
                        far I have attended several open source talks and events and collaborated with the FOSSASIA
                        and AnitaB organizations.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}
export default About;
