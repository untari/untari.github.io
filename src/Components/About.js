import React from 'react';
import Tari from './tari.png';
import Typical from 'react-typical';


function About() {

    return (
      <div id="about">
            <card type="nav-tabs" class="text-center">
                <div slot="header" class="card-header-primary">
                   <img src={Tari} className="rounded-circle" alt="cardImg" width="100" height="100"/>
                </div>
                <h2 class="card-title">Untari</h2>
                <p class="card-text"><font size="3" face="verdana" >
                    I am a frontend software developer looking for challenging projects  <br />
                  <Typical 
                      loop={Infinity}
                      wrapper="p"
                      steps={[
                           'that make an impact and allow me to keep learning and improving my skills' , 1000]} />
                  
                </font>
             </p>                
          </card>

      </div>
    );
}
export default About;
