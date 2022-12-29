import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Social from './Social';
 
class Skills extends Component {
    render() {
        return (
            <div>
                <Navbar /><br></br><br></br><br></br>
                <div className="pt-5 pb-5" style={{ backgroundColor: "#ff7e5e" }}>

                    <div className="row mr-0">
                        <div className="col-lg-7 mx-auto">
                            <ul className="timeline">
                                <li className="timeline-item bg-white rounded ml-3 p-4 shadow">
                                    <div className="timeline-arrow"></div>
                                    <h2 className="h4 mb-2">Programming Languages</h2>
                                    <p className="languages">C++</p>
                                    <div className="mb-3  progress">
                                        <div class="progress-bar progress-bar-striped  progress-bar-animated" style={{ width: "90%" }}></div>
                                    </div>
                                    <p className="languages">JavaScript</p>
                                    <div className="mb-3 progress">
                                        <div className="progress-bar progress-bar-striped  progress-bar-animated" style={{ width: "80%" }}></div>
                                    </div>
                                    <p className="languages">Python</p>
                                    <div className="mb-3 progress">
                                        <div className="progress-bar progress-bar-striped  progress-bar-animated" style={{ width: "40%" }}></div>
                                    </div>
                                    <p className="languages">Java</p>
                                    <div className="mb-3  progress">
                                        <div class="progress-bar progress-bar-striped  progress-bar-animated" style={{ width: "50%" }}></div>
                                    </div>
                                </li>
                                <li className="timeline-item bg-white rounded ml-3 p-4 shadow">
                                    <div className="timeline-arrow"></div>
                                    <h2 className="h4 mb-2">Frontend Skills</h2>
                                    <p className="languages">HTML + CSS</p>
                                    <div className="mb-3  progress">
                                        <div class="progress-bar progress-bar-striped  progress-bar-animated" style={{ width: "70%" }}></div>
                                    </div>
                                    <p className="languages">BootStrap</p>
                                    <div className="mb-3 progress">
                                        <div className="progress-bar progress-bar-striped  progress-bar-animated" style={{ width: "65%" }}></div>
                                    </div>
                                    <p className="languages">React + Redux</p>
                                    <div className="mb-3 progress">
                                        <div className="progress-bar progress-bar-striped  progress-bar-animated" style={{ width: "70%" }}></div>
                                    </div>
                                </li>

                                <li className="timeline-item bg-white rounded ml-3 p-4 shadow">
                                    <div className="timeline-arrow"></div>
                                    <h2 className="h4 mb-2">Backend Skills</h2>
                                    <p className="languages">Express</p>
                                    <div className="mb-3  progress">
                                        <div className="progress-bar progress-bar-striped  progress-bar-animated" style={{ width: "50%" }}></div>
                                    </div>
                                    <p className="languages">Node</p>
                                    <div class="mb-3 progress">
                                        <div className="progress-bar progress-bar-striped  progress-bar-animated" style={{ width: "50%" }}></div>
                                    </div>
                                    <p className="languages">MySQL</p>
                                    <div className="mb-3 progress">
                                        <div className="progress-bar progress-bar-striped  progress-bar-animated" style={{ width: "80%" }}></div>
                                    </div>
                                    <p className="languages">MongoDB</p>
                                    <div className="mb-3 progress">
                                        <div className="progress-bar progress-bar-striped  progress-bar-animated" style={{ width: "40%" }}></div>
                                    </div>
                                </li>
                                <li className="timeline-item bg-white rounded ml-3 p-4 shadow">
                                    <div className="timeline-arrow"></div>
                                    <h2 className="h4 mb-2">DevOps tools</h2>
                                    <p className="languages">Git Version Control</p>
                                    <div className="mb-3  progress">
                                        <div className="progress-bar progress-bar-striped  progress-bar-animated" style={{ width: "60%" }}></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <section id="extra-features" class="extra-features pt-5 pb-5" style={{ backgroundColor: "#ff7e5f" }}>
                        <div className="container text-center">
                            <h2 id="Projects">COMPETITIVE PROGRAMMING</h2>
                            <div className="row">
                                <p className="lead col-lg-8 mx-auto">Platforms where I do competitive programming</p>
                            </div>
                            <div className="grid row">
                                <div className="item col-lg-4 col-md-6">
                                    <div className="icon">
                                        <i className="icon-diploma">
                                            <a href={"https://www.codechef.com/users/shrikant7198"} ><img src={require('../images/cpIcons/codechef.jpeg')} className="rounded-circle border border-dark" alt="logo" style={{ width: "50px", height: "50px" }} /></a>
                                        </i>
                                    </div>
                                    <h3 className="h5">CODECHEF</h3>
                                </div>
                                <div className="item col-lg-4 col-md-6">
                                    <div className="icon">
                                        <i className="icon-diploma">
                                            <a href={"https://codeforces.com/profile/shrikantkumar1999"}><img src={require('../images/cpIcons/codeforces.jpg')} alt="logo" className="rounded-circle border border-dark" style={{ width: "50px", height: "50px" }} /></a>
                                        </i>
                                    </div>
                                    <h3 className="h5">CODEFORCES</h3>
                                </div>
                                <div className="item col-lg-4 col-md-6">
                                    <div className="icon">
                                        <i className="icon-diploma">
                                            <a href={"https://www.hackerearth.com/@shrikant118"}><img src={require('../images/cpIcons/hackerearth.png')} alt="logo" className="rounded-circle border border-dark" style={{ width: "50px", height: "50px" }} /></a>
                                        </i>
                                    </div>
                                    <h3 className="h5">HACKEREARTH</h3>
                                </div>
                                <div className="item col-lg-4 col-md-6">
                                    <div className="icon">
                                        <i className="icon-diploma">
                                            <a href={"https://leetcode.com/shrikant7891/"}><img src={require('../images/cpIcons/hackerearth.png')} alt="logo" className="rounded-circle border border-dark" style={{ width: "50px", height: "50px" }} /></a>
                                        </i>
                                    </div>
                                    <h3 className="h5">LEETCODE</h3>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <Footer />
                <Social />
            </div>
        )
    }
}

export default Skills;