import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <div id="footer" className="container-fluid bg-dark">
                <div className="row text-center d-flex justify-content-center pt-5 ">
                    <div className="col-md-2 mb-3">
                        <h6 className="font-weight-bold">
                            <Link to="/About" className="footerLink">ABOUT</Link>
                        </h6>
                    </div>
                    <div className="col-md-2 mb-3">
                        <h6 className="font-weight-bold">
                            <Link to="/Projects" className="footerLink">PROJECTS</Link>
                        </h6>
                    </div>
                    <div className="col-md-2 mb-3">
                        <h6 className="font-weight-bold text-decotation-none">
                            <Link to="/Skills" className="footerLink">SKILLS</Link>
                        </h6>
                    </div>
                    <div className="col-md-2 mb-3">
                        <h6 className="font-weight-bold">
                            <Link to="/Contact" className="footerLink">CONTACT</Link>
                        </h6>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;