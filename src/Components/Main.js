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
          <div id="home">
                 {/*<div id="overlay">  //dirty solution, not recommended)//
                     <div className="centered">
                        <a href="#">
                          <img src={Bulb2} height="17%" width="17%" alt="on"   />
                        </a>
                     </div>
                 </div>*/}
                 <nav class="navbar navbar-expand-lg navbar-dark indigo">
                      <NavbarBrand href="/home"><img src={logo} alt="logo" height="50" width="50" /><span className="brand-text">Untari.com</span></NavbarBrand>
                      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                        aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                      </button>


                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ml-auto active ">
                            <Link to="/home" className="nav-item text-dark nav-link mx-3 ">Home</Link>
                            <Link to="/about" className="nav-item  text-dark nav-link mx-3 ">About me</Link>
                            <Link to="/blog" className="nav-item text-dark nav-link mx-3 ">Blog</Link>
                            <Link to="/contact" className="nav-item text-dark nav-link mx-3 ">Contact</Link>
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

