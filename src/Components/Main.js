import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import { Navbar, NavbarBrand } from 'reactstrap';
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
               <Navbar>
                    <NavbarBrand>
                     <img src={Logo} alt="logo" heigth="40" width="40" /><span>untari.com</span>
                    </NavbarBrand>
                    <ul>
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/about">About</Link></li>
                      <li><Link to="/contact">Contact</Link></li>
                      <li><Link to="/blog">Blog</Link></li>
                    </ul>
               </Navbar>
               <div>
                  <div className="resume">
                    <Link to="/resume"><img src="https://www.flaticon.com/premium-icon/icons/svg/2066/2066364.svg" alt="CV" heigth="5%" width="5%"  /></Link>
                  </div>
                  <div className="project">
                      <Link to="/project"><img src="https://www.flaticon.com/premium-icon/icons/svg/2786/2786993.svg" alt="project" heigth="10%" width="10%" /></Link>
                  </div>
                  <div className="certificate">
                      <Link to="/certification"><img src="https://image.flaticon.com/icons/svg/2912/2912761.svg" alt="certificate" heigth="10%" width="10%" /></Link>
                  </div>
               </div>
               <hr />
                <Route exact path="/" component={Home} />
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