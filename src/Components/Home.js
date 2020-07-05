import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Bulb2 from './bulb2.svg';
import Profile from './resume.png';
import certificate from './certificate.png';

const docBody = document.querySelector ('body');

class Home extends Component {
    constructor(props) {
        super(props);
            this.state = {bgColored: false};
            this.colorBackground = this.colorBackground.bind(this);
            this.state={

        }
    }
    colorBackground() {
        this.setState({bgColored: true})
    }
    componentDidUpdate(preProps, prevState) {
        const { bgColored } = this.state;
        const className = 'imageBg';
        if(prevState.bgColored !== bgColored){
            bgColored ?
                docBody.classList.add(className) :
                docBody.classList.remove(className);
        }

    }

    render() {
        return(
          <div>
              <div className="centered">
                <a href="#" onClick={() => this.colorBackground()}>
                  <img src={Bulb2} height="10%" width="10%" alt="on"   />
                </a>
              </div>
              <div className="text-center">
                <Link to="resume"><img src={Profile} alt="resume" height="50" widht="50" /></Link>
              </div>
              <div className="text-left">
                <Link to="certification"><img src={certificate} alt="certification" className="certification" height="50" widht="50" /></Link>
              </div>
          </div>
        );
    }
}
export default Home;