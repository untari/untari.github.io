import React, { Component } from 'react';
import Bulb2 from './bulb2.svg';

const docBody = document.querySelector ('body');

class Home extends Component {
        constructor(props) {
            super(props);
                this.state = {bgColored: false};
                this.colorBackground = this.colorBackground.bind(this);
            }
            colorBackground() {
                this.setState({bgColored: true})
            }
            componentDidUpdate(preProps, prevState) {
                const { bgColored } = this.state;
                const className = 'whiteBg';
                
                if(prevState.bgColored !== bgColored){
                    bgColored ?
                        docBody.classList.add(className) :
                        docBody.classList.remove(className);
                }
                    
      }
      render() {
        return(
            <div className="centered">
                <a href="#" onClick={() => this.colorBackground()}><img src={Bulb2} height="300" width="300" alt="on" /></a>
            </div>
        );
      }

}
export default Home;
