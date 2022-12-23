import React from 'react';
import ReactDOM from 'react-dom';
// import { Route,Routes, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import {   HashRouter,  Route, Switch } from "react-router-dom";
import App from './App';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Notfound from './components/Notfound';
import * as serviceWorker from './serviceWorker';


const routing = (
    
    <HashRouter> 
         <div>
           
            <Switch>

            <Route  exact path="/" component={App} />
                <Route  path="/About" component={About} />
                <Route  path="/Projects" component={Projects} />
                <Route path="/Skills" component={Skills} />
                <Route path="/Contact" component={Contact} />
                <Route  path="*" component={Notfound} />
            </Switch>
       </div>
    </HashRouter>
)


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
