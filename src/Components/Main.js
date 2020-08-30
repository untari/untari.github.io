import React, { Component  } from 'react';
import { Redirect,  Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Blog from './Blog';


const Loading =()=>
  <div className="loading">
    <div></div>
    <div></div>
  </div> 


class Main extends Component {
   state = {
        loading: true,
    };
    componentDidMount(){
        this.isLoading = setTimeout(()=>{this.setState({loading: false})}, 2300);
    }
    componentWillUnmount() {
        clearTimeout(this.isLoading);
    }
    
    timer = () => setTimeout(()=>{
        this.setState({loading: false})
    }, 2300);

    render() {
        const {loading} = this.state;
        return(
            loading ? (<Loading/>)
           :(<div>
                <Header />
                            <Route exact path="/home" component={Home}  />
                            <Redirect to="/home" component={Home} />
                            <Route  path="/about" component={About} />
                            <Route  path="/contact" component={Contact} />
                            <Route  path="/blog" component={Blog} />
                <Footer />
            </div>)
        );
    }
}
export default Main;
