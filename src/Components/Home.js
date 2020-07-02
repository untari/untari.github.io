import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Bulb2 from './bulb2.svg';

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
                  <img src={Bulb2} height="17%" width="17%" alt="on"   />
                </a>
              </div>
              <div className="resume">
                    <Link to="/resume"><img src="https://www.flaticon.com/premium-icon/icons/svg/2066/2066364.svg" alt="CV" heigth="11%" width="11%"  /></Link>
              </div>
          </div>
        );
    }
}
export default Home;