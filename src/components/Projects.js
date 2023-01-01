import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Social from './Social';

class Projects extends Component {
    render() {
        return (
            <div>
                <Navbar /><br></br><br></br><br></br>
                <div>
                    <section id="extra-features" class="extra-features pt-5 pb-5" style={{ backgroundColor: "#ea353d" }}>
                        <div className="container text-center">
                            <h2 id="Projects">PROJECTS</h2>
                            <div className="row">
                                <p className="lead col-lg-8 mx-auto">Some of the projects developed by me</p>
                            </div>
                            <div className="grid row">
                                <div className="item col-lg-4 col-md-6">
                                    <div className="icon">
                                        <i className="icon-diploma">
                                            <a href={"https://shrikantkumar1999.github.io/bbsvbl/"} ><img src={require('../images/socialIcons/github.png')} alt="logo" style={{ width: "50px", height: "50px" }} /></a>
                                        </i>
                                    </div>
                                    <h3 className="h5">Bank Resistration</h3>
                                    <p>Building an online Bank Resistration</p>
                                </div>
                                <div className="item col-lg-4 col-md-6">
                                    <div className="icon">
                                        <i className="icon-diploma">
                                            <a href={"https://shrikantkumar1999.github.io/facebook/"}><img src={require('../images/socialIcons/github.png')} alt="logo" style={{ width: "50px", height: "50px" }} /></a>
                                        </i>
                                    </div>
                                    <h3 className="h5">facebook-clone</h3>
                                    <p>facebook-clone website </p>
                                </div>
                                      
  
                                 
                               
                                <div className="item col-lg-4 col-md-6">
                                    <div className="icon">
                                        <i className="icon-diploma">
                                            <a href={"https://github.com/shrikantkumar1999/portfolio"}><img src={require('../images/socialIcons/github.png')} alt="logo" style={{ width: "50px", height: "50px" }} /></a>
                                        </i>
                                    </div>
                                    <h3 className="h5">Portfolio</h3>
                                    <p>Website showcasing my portfolio</p>
                                </div>
                                <div className="item col-lg-4 col-md-6">
                                    <div className="icon">
                                        <i className="icon-diploma">
                                            <a href={"https://leetcode.com/"}><img src={require('../images/socialIcons/github.png')} alt="logo" style={{ width: "50px", height: "50px" }} /></a>
                                        </i>
                                    </div>
                                    <h3 className="h5">Weather-Mix App</h3>
                                    <p>Web app displaying current weather</p>
                                </div>
                                 
                                <div className="item col-lg-4 col-md-6">
                                    <div className="icon">
                                        <i className="icon-diploma">
                                            <a href={"https://leetcode.com/"}><img src={require('../images/socialIcons/github.png')} alt="logo" style={{ width: "50px", height: "50px" }} /></a>
                                        </i>
                                    </div>
                                    <h3 className="h5">RESPONSE TIME BASED BRAKING SYSTEM(MAJOR PROJECT)</h3>
                                    <p>To Minimize time to collision (TTC) by more accurate mathematical modelling</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <Footer />
                <Social />
            </div >
        )
    }
}

export default Projects;