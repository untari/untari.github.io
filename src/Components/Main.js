import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Blog from './Blog';
import Resume from './Resume';
import Project from './Project';
import Certification from './Certification';
import Logo from './smile.png';

class Main extends Component {
    render() {
        return(
          <div>
             <nav className="navbar navbar-expand-md navbar-light sticky-top">
                <a href="#" className="navbar-brand">
                    <img src={Logo} alt="logo" heigth="40" width="40" /><span className="text-dark">untari.com</span>
                </a>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ml-auto">
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
          </div>
        );
    }
}
export default Main;

