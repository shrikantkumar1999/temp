import React, { Component } from 'react';

class Social extends Component {
    render() {
        return (
            <div >

                <div className="page-footer font-small  pt-5 pb-5 bg-dark">
                    <div className="container">
                        <ul className="list-unstyled list-inline text-center">
                            <li className="list-inline-item">
                                <a href="https://www.facebook.com/shrikantkumar1998" target="_blank" rel="noopener noreferrer">
                                    <i id="social-fb" className="fa fa-facebook-square fa-2x social"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://github.com/shrikantkumar1999" target="_blank" rel="noopener noreferrer">
                                    <i id="social-g" class="fa fa-github fa-2x social"></i>
                                </a>
                            </li>

                            <li className="list-inline-item">
                                <a href="https://www.instagram.com/shrikantkumar1998/" target="_blank" rel="noopener noreferrer">
                                    <i id="social-ig" class="fa fa-instagram fa-2x social"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://www.linkedin.com/in/shrikant-kumar-5663951a4/" target="_blank" rel="noopener noreferrer">
                                    <i id="social-li" class="fa fa-linkedin-square fa-2x social"></i>
                                </a>
                            </li>

                            <li className="list-inline-item">
                                <a href="https://stackoverflow.com/users/17410747/shrikant-kumar" target="_blank" rel="noopener noreferrer">
                                    <i id="social-so" class="fa fa-stack-overflow fa-2x social"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="tel:+917891965319"  rel="noopener noreferrer">
                                    <i id="social-ig" class="fa fa-mobile fa-2x social"></i>
                                </a> 
                            </li>
                             
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Social;