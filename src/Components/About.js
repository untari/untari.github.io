import React from 'react';
import Tari from './tari.png';



function About() {

    return (
      <div id="about">
            <card type="nav-tabs" class="text-center">
                <div slot="header" class="card-header-primary">
                   <img src={Tari} className="rounded-circle" alt="cardImg" width="100" height="100"/>
                </div>
                <h4 class="card-title">Untari</h4>
                <p class="card-text">I am a frontend software developer looking for <br />challenging projects that make an
                impact and allow me to keep learning and improving my skills.</p>                
          </card>

      </div>
    );
}
export default About;
