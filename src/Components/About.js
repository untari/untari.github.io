import React, { Component } from 'react';
import Tari from './tari.png';
import { Grid, Cell } from 'react-mdl';
import {  Card, CardText, CardBody } from 'reactstrap';



class About extends Component {
  render() {
    return (
       <div >
            <Grid className="about">
            <Cell col={4}>
                    <div style={{textAlign: 'center'}}>
                    <img
                        src={Tari}
                        alt="avatar"
                        style={{height: "300px",   paddingTop: "4em"}}
                        />
                    </div>
                    <Card  style={{textAlign: 'center', color: "black", backgroundColor: "#c7ebea", border: "none"}}>
                        <CardBody>
                        <h3>Untari</h3>
                        <CardText>I am a frontend software developer looking for challenging projects  <br />
                            that make an impact and allow me to keep learning and improving my skills.</CardText>
                        </CardBody>
                    </Card>
            </Cell>
            </Grid>
      </div>
    );
  }
}
export default About;
