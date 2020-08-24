import React, { Component } from 'react';
import { HashRouter  } from "react-router-dom";
import './App.css';
import Main from './Components/Main';



class App extends Component {
     render() {
         return (
            <HashRouter basename='/'>
                    <div className="wrapper">
                        <Main />
                    </div>
           </HashRouter>
        );
     }
}
export default App;
