import React, { Component } from 'react';
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
           <>
              <div className="centered">
                <a href="#" onClick={() => this.colorBackground()}>
                  <img src={Bulb2} height="90" width="90" alt="on" className="img-responsive"  />
                </a>

              </div>

           </>
        );
    }

}
export default Home;