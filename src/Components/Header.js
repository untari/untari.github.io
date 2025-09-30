import React, { Component } from 'react';
import {  NavbarBrand } from 'reactstrap';
import { NavLink, Link} from 'react-router-dom';
import logo from '../Images/logo.svg';


const style = {
  borderRadius: 3,
  border: 0,
  color: 'black',
  height: 30,
  padding: '2px 9px',
  marginRight: '10px',
};

class Header extends Component {
    render() {
        return(
            <div>
                <div>
                    <a href="https://github.com/untari/untari.github.io"> 
                        <img loading="lazy" width="149" height="149" src="https://github.blog/wp-content/uploads/2008/12/forkme_right_darkblue_121621.png?resize=149%2C149" className="attachment-full size-full float-end" alt="Fork me on GitHub" data-recalc-dims="1"/> 
                    </a>
                </div>
                <nav className="navbar navbar-expand-lg navbar-dark fixed-top ">
                    <NavbarBrand tag={Link} to="/home" className="img-responsive">
                        <img src={logo} id="logo" alt="logo" />
                    </NavbarBrand>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                        aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" style={{backgroundColor: "#47a892"}}></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav  ml-auto">             
                            <NavLink to="/home"  style={style} activeClassName="active" id="nav2">HOME</NavLink>
                            <NavLink to="/about"   style={style} activeClassName="active "  id="nav2">ABOUT ME</NavLink>
                            <NavLink to="/blog"   style={style} activeClassName="active "  id="nav2" >BLOG</NavLink>
                            <NavLink  to="/contact"   style={style} activeClassName="active "  id="nav2" >CONTACT</NavLink >          
                        </div>  
                    </div>
                </nav>
            </div>   
        );
    }
}
export default Header;
