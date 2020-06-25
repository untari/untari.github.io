import React from 'react';
import {  Card, CardImg, CardText, CardBody,  CardTitle } from 'reactstrap';
import Tari from './tari.svg';

const About = () => {
    return(
        <div>
            <Card>
                <CardImg top width="20%" src={Tari} alt="Card image cap" />
                <CardBody>
                <CardTitle>Untari</CardTitle>
                <CardText>I am a frontend software developer looking <br/>
                   for challenging projects that make an<br />
                    impact and allow me
                    to keep learning and improving my skills.</CardText>
                </CardBody>
            </Card>
        </div>
    );
}
export default About;
