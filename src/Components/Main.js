import React, { Component } from 'react';
import { Route } from "react-router-dom";
import $ from 'jquery';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Blog from './Blog';
import Resume from './Resume';
import Project from './Project';
import Certification from './Certification';
import Logo from './smile.png';
import Bulb2 from './bulb2.svg';

$(function(){
  //Am hiding the overlay after 2 sec
  $("#overlay").delay(3000).hide(200);
})

class Main extends Component {
    render() {
        return(
          <div>
                 <div id="overlay">
                     <div className="centered">
                        <a href="#" >
                          <img src={Bulb2} height="17%" width="17%" alt="on"   />
                        </a>
                     </div>
                 </div>
                 <nav className="navbar navbar-expand-md navbar-light sticky-top">
                    <a href="#" className="navbar-brand">
                        <img src={Logo} alt="logo" heigth="40" width="40" /><span className="text-dark">untari.com</span>
                    </a>
                    <button type="button" className="navbar-toggler pull-left" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ml-auto ">
                            <a href="#home" className="nav-item nav-link active">Home</a>
                            <a href="#about" className="nav-item nav-link active">About me</a>
                            <a href="#blog" className="nav-item nav-link active">Blog</a>
                            <a href="#contact" className="nav-item nav-link active">Contact</a>
                        </div>
                    </div>
                 </nav>



                 <Route path="/home" component={Home} />
                 <Route exact path="/" component={Home}  />
                 <Route path="/about" component={About} />
                 <Route path="/contact" component={Contact} />
                 <Route path="/blog" component={Blog} />
                 <Route path="/resume" component={Resume} />
                 <Route path="/project" component={Project} />
                 <Route path="/certification" component={Certification} />


                 <div className="container">
                    <div className="bottom-right">
                        <a className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/in/untari"><i className="fa fa-linkedin fa-3x"></i></a>
                        <a className="btn btn-social-icon btn-github" href="https://github.com/untari" ><i className="fa fa-github fa-3x"></i></a>
                        <a className="btn btn-social-icon" href="#"><i className="fa fa-envelope-o fa-3x"></i></a>
                    </div>
                 </div>
          </div>
        );
    }
}
export default Main;

