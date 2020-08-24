import React, { Component } from 'react';
import Tari from './tari.png';
import {  Card, CardText, CardBody, CardImg } from 'reactstrap';



class About extends Component {
  render() {
    return (
             <div  id="about">
                    <div className="text-center" >                    
                            <Card style={{backgroundColor: "#c7ebea", border: "none"}}>
                                <CardImg
                                src={Tari}
                                alt="avatar"
                                id="pic"
                                className="img-fluid"
                                style={{ borderRadius: "25px", width: "40%", marginLeft: "30%"}}
                                />
                                <CardBody>
                                <h3>Untari</h3>
                                <CardText>I am a frontend software developer looking for challenging projects  <br />
                                    that make an impact and allow me to keep learning and improving my skills.</CardText>
                                </CardBody>
                            </Card>
                  </div>
            </div>
    );
  }
}
export default About;
