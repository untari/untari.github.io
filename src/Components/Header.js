import React, { Component } from 'react';
import {  NavbarBrand } from 'reactstrap';
import { NavLink, Link} from 'react-router-dom';
import { Redirect,  Route } from 'react-router-dom';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Blog from './Blog';

import logo from './logo.svg';


const style = {
  borderRadius: 3,
  border: 0,
  color: 'black',
  height: 40,
  padding: '2px 9px',
  marginRight: '10px',
};
class Header extends Component {
    render() {
        return(
            <div>
                     <nav className="navbar navbar-expand-lg navbar-dark fixed-top ">
                        <NavbarBrand className="img-responsive"> <Link to="/home"><img src={logo} id="logo" alt="logo" /></Link></NavbarBrand>
                        
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                            aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" style={{backgroundColor: "#47a892"}}></span>
                        </button>


                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav  ml-auto">
                        
                                      <NavLink to="/home"  style={style} activeClassName="active" id="nav2">Home</NavLink>
                                      <NavLink to="/about"   style={style} activeClassName="active "  id="nav2">About me</NavLink>
                                      <NavLink to="/blog"   style={style} activeClassName="active "  id="nav2" >Blog</NavLink>
                                     <NavLink  to="/contact"   style={style} activeClassName="active "  id="nav2" >Contact</NavLink >
                                    
                            </div>
                           
                        </div>
                    </nav>
            </div>
   
        );
    }
}
export default Header;
