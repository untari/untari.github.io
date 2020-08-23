import React, { Component  } from 'react';
import { Redirect,  Route, Switch } from 'react-router-dom';
import { NavbarBrand } from 'reactstrap';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Blog from './Blog';





class Main extends Component {
    render() {
        return(
            <div>
                <Header />
                            <Route exact path="/home" component={Home}  />
                            <Redirect to="/home" component={Home} />
                            <Route  path="/about" component={About} />
                            <Route  path="/contact" component={Contact} />
                            <Route  path="/blog" component={Blog} />
                <Footer />
            </div>
        );
    }
}
export default Main;
