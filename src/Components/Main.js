import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import { Navbar, NavbarBrand } from 'reactstrap';
import Home from './Home';
import About from './About';
import Contact from './Contact';
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
                        </ul>
                   </Navbar>
                    <hr />
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                </div>
            );
    }
}
export default Main;
