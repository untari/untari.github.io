import React, { Component } from 'react';
import {  BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Main from './Components/Main';



class App extends Component {
     render() {
         return (
           <BrowserRouter  >
                <Route basename={process.env.PUBLIC_URL} >
                    <div>
                        <Main />
                    </div>
                </Route>
            </BrowserRouter>
        );
     }
}
export default App;

