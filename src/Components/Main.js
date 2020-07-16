import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { NavbarBrand } from 'reactstrap';
import $ from 'jquery';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Blog from './Blog';
import Resume from './Resume';
import Project from './Project';
import Certification from './Certification';
import Bulb2 from './bulb2.svg';
import logo from './logo.svg';


{/*$(function(){   //dirty solution, not recommended)//
  //Am hiding the overlay after 2 sec
  $("#overlay").delay(3000).hide(200);
})*/}

class Main extends Component {
    render() {
        return(
          <div>
                 {/*<div id="overlay">  //dirty solution, not recommended)//
                     <div className="centered">
                        <a href="#">
                          <img src={Bulb2} height="17%" width="17%" alt="on"   />
                        </a>
                     </div>
                 </div>*/}
                 <nav className="navbar navbar-expand-md navbar-light sticky-top">
                    <NavbarBrand><Link to="home"><img src={logo} alt="logo" height="50" width="50"  /><span className="brand-text text-dark">Untari.com</span></Link></NavbarBrand>
                    <button type="button" className="navbar-toggler pull-left" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ml-auto active ">
                            <a href="#home" className="nav-item text-dark nav-link mx-3 ">Home</a>
                            <a href="#about" className="nav-item text-dark nav-link mx-3 ">About me</a>
                            <a href="#blog" className="nav-item text-dark nav-link mx-3 ">Blog</a>
                            <a href="#contact" className="nav-item text-dark nav-link mx-3 ">Contact</a>
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
                        <a className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/in/untari"  tooltip="LinkedIn"><i className="fa fa-linkedin-square fa-2x" aria-hidden="true" ></i></a>
                        <a className="btn btn-social-icon btn-github" href="https://github.com/untari"  tooltip="Github"><i class="fa fa-github-alt fa-2x"></i></a>
                    </div>
                 </div>
          </div>
        );
    }
}
export default Main;

