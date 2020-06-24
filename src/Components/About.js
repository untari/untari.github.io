import React, { Component } from 'react';
import Tari from './tari.jpg';

class About extends Component {
  render() {
    return (
       <div className="container">
         <div>
           <img className="card-img-top" src={Tari} alt="card img" width="20%" height="20%" />
           <div className="card-body">
              <h2 className="card-title">Untari</h2>
              <p className="card-text">I am a frontend software developer looking for challenging projects
                that make an impact and allow me to keep learning and improving my skills.</p>
           </div>
         </div>
       </div>
    );
  }
}
export default About;