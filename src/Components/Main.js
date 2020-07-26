import React, { Component } from 'react';
import { Redirect,  Route, Link, NavLink } from 'react-router-dom';
import { NavbarBrand } from 'reactstrap';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Blog from './Blog';
import Resume from './Resume';
import Project from './Project';
import Certification from './Certification';
import logo from './logo.svg';


/*$(function(){   //dirty solution, not recommended)//
  //Am hiding the overlay after 2 sec
  $("#overlay").delay(3000).hide(200);
})*/
const style = {
  borderRadius: 3,
  border: 0,
  color: 'black',
  height: 40,
  padding: '2px 9px',
  marginRight: '10px',
};
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

                    <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
                        <NavbarBrand className="img-fluid"> <Link to="/home"><img src={logo} id="logo" alt="logo" /></Link></NavbarBrand>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                            aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>


                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav ml-auto">
                        
                                      <NavLink to="/home"  style={style} activeClassName="active" id="nav2">Home</NavLink>
                                      <NavLink to="/about"   style={style} activeClassName="active "  id="nav2" >About me</NavLink>
                                      <NavLink to="/blog"   style={style} activeClassName="active "  id="nav2" >Blog</NavLink>
                                     <NavLink  to="/contact"   style={style} activeClassName="active "  id="nav2" >Contact</NavLink >
                          
                            </div>
                        </div>
                    </nav>

                    <div>
                         <Home />
                    </div>

                 
                 <Route exact path="/home" component={Home}  />
                 <Redirect to="/home" component={Home} />
                 <Route  path="/about" component={About} />
                 <Route  path="/contact" component={Contact} />
                 <Route  path="/blog" component={Blog} />
                 <Route  path="/resume" component={Resume} />
                 <Route  path="/project" component={Project} />
                 <Route  path="/certification" component={Certification} />


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
