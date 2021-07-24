import React, { Component } from 'react';
import Tari from '../Images/tari.png';
import {  Card, CardText, CardBody, CardImg } from 'reactstrap';
import Typical from 'react-typical';



class About extends Component {
  render() {
    return (
             <div  className="container">                 
                 <div className="about">
                            <Card style={{border: "none", backgroundColor:"#c7ebea"}}>
                                <CardImg
                                src={Tari}
                                alt="avatar"
                                className="img-fluid"
                                style={{ borderRadius: "25px", width: "30%"}}
                                />
                                <CardBody>
                                <h3>Untari</h3>
                                <CardText>
                                    <Typical 
                                    steps={["I am a frontend software developer looking for challenging projects that make an impact and allow me to keep learning and improving my skills"]}
                                    loop={Infinity}
                                    wrapper="p"
                                    />
                                    </CardText>
                                </CardBody>
                            </Card>
                    </div>
            </div>
    );
  }
}
export default About;
