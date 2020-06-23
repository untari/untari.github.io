import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';

class Main extends Component {
       render() {
            return(
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                    <hr />

                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                </div>
            );
    }
}
export default Main;
