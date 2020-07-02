import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import { Nav, Navbar, NavbarBrand,  NavItem,  } from 'reactstrap';
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
               <Navbar dark expand="lg">
                    <div  className="container-fluid">
                        <NavbarBrand className="mr-auto">
                           <img src={Logo} alt="logo" heigth="40" width="40" /><span className="text-dark">untari.com</span>
                        </NavbarBrand>
                         <Nav className="navbar navbar-expand-sm" >
                             <NavItem>
                                 <Link className="nav-link text-dark" to="/home">
                                        <span className="fa fa-home fa-lg"></span>Home
                                 </Link>
                             </NavItem>
                             <NavItem>
                                   <Link className="nav-link text-dark" to="/about">
                                           <span className="fa fa-info fa-lg"></span>About me
                                   </Link>
                             </NavItem>
                             <NavItem>
                                   <Link className="nav-link text-dark" to="/blog">
                                       <span className="fa fa-list fa-lg"></span>Blog
                                   </Link>
                             </NavItem>
                              <NavItem>
                                   <Link className="nav-link text-dark" to="/contact">
                                        <span className="fa fa-card  fa-lg"></span>Contact
                                   </Link>
                              </NavItem>
                         </Nav>
                    </div>
               </Navbar>

               <hr />
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