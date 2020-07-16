import React from 'react';
import {  Card, CardImg, CardText, CardBody,  CardTitle } from 'reactstrap';
import Tari from './tari.png';



function About() {

    return (
      <div id="about">
        <Card className="card">
            <CardImg top src={Tari} alt="Card image cap" className="rounded-circle" height="50%" width="10%" />
            <CardBody>
            <CardTitle>Untari</CardTitle>
            <CardText className="text-dark">I am a frontend software developer looking for challenging projects that make an
                impact and allow me to keep learning and improving my skills.</CardText>
            </CardBody>
        </Card>
      </div>
    );
}
export default About;
