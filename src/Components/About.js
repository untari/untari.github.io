import React from 'react';
import {  Card, CardImg, CardText, CardBody,  CardTitle } from 'reactstrap';
import Tari from './tari.svg';

const About = () => {
    return(
        <div className="container">
              <div className="row">
                 <div className="col-md-6 col-lg-4 col-xl-3">
                    <Card className="card">
                        <CardImg top src={Tari} alt="Card image cap" height="10%" width="10%" />
                        <CardBody>
                        <CardTitle>Untari</CardTitle>
                        <CardText>I am a frontend software developer looking for challenging projects that make an
                            impact and allow me to keep learning and improving my skills.</CardText>
                        </CardBody>
                    </Card>
                 </div>
              </div>
        </div>
    );
}
export default About;
