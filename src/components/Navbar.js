import React, { Component } from 'react';
import { Link } from "react-router-dom";
 
import GithubCorner from 'react-github-corner';

class Nav extends Component {
    render() {
        return (
            <div className='fixed' >
                <div className="navbar navbar-expand-md bg-dark navbar-dark" >
                    <Link className="navbar-brand" to="/">
                    <p>SHRIKANT KUMAR </p></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav ml-auto mr-5">
                            <li className="nav-item">
                                <Link  className="nav-link" to='/About' >ABOUT</Link>
                            </li>
                            <li className="nav-item">
                                <Link  className="nav-link" to="/Projects" >PROJECTS</Link>
                            </li>
                            <li className="nav-item"> 
                                <Link className="nav-link"  to="/Skills">SKILLS</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Contact">CONTACT</Link>
                            </li>
                            <li className="nav-item d-none d-sm-none d-md-block ">
                                <GithubCorner href={"https://github.com/shrikantkumar1999"} bannerColor="#151513" octoColor="#fff" size={90} direction="right" />
                            </li>
                        </ul>
                    </div>
                </div> 
            </div>
        );
    }
}

export default Nav;